import { useEffect, useState } from "react";
import TrainingSelectModal from "../../Modal/TrainingSelectModal/TrainingSelectModal";
import { CardType } from "../../../types/cards";
import { deleteCourseToUser, deleteProgress, getCourseById, getUserCourse } from "../../../utils/api";
import { useUser } from "../../../hooks/useUser";

type UserCardsProps = CardType & { onDelete: (courseId: string) => void };

function UserCards({ courseId, image, nameRu, onDelete }: UserCardsProps) {
	const [isTrainingSelectModalOpen, setTrainingSelectModalOpen] = useState(false);
	const [courseDataLength, setCourseDataLength] = useState(0);
	const [userCourseLength, setUserCourseLength] = useState(0);
	const [userProgress, setUserProgress] = useState<number>(0);
	const { user } = useUser();

	const openTrainingSelectModal = () => setTrainingSelectModalOpen(true);
	const closeTrainingSelectModal = () => setTrainingSelectModalOpen(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const courseData = await getCourseById(courseId);
				setCourseDataLength(courseData.workouts.length);

				const userData = await getUserCourse(user.uid, courseId);
				setUserCourseLength(userData ? Object.keys(userData).length : 0);
			} catch (error) {
				console.error("Error fetching course data:", error);
			}
		};
		fetchData();
	}, [courseId, user.uid]);

	useEffect(() => {
		changeProgress();
	}, [courseDataLength, userCourseLength]);

	function restartTraining() {
		deleteProgress(user.uid, courseId)
			.then(() => {
				setUserCourseLength(0); // Обновляем состояние после успешного удаления
				changeProgress();
			})
			.catch((error) => {
				console.error("Ошибка при удалении прогресса:", error);
			});
	}

	function changeProgress() {
		if (courseDataLength > 0) {
			let courseLength = 100 / courseDataLength;
			let progress = courseLength * userCourseLength;
			setUserProgress(Math.ceil(progress));
		}
	}

	function deleteCourse() {
		deleteCourseToUser(user.uid, courseId)
			.then(() => {
				onDelete(courseId);
			})
			.catch((error) => {
				console.error("Ошибка при удалении курса:", error);
			});
	}

	const renderButton = () => {
		if (userProgress === 0) {
			return (
				<button
					onClick={openTrainingSelectModal}
					className="w-[300px] h-[52px] bg-[#BCEC30] rounded-[46px] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] text-lg"
				>
					Начать тренировки
				</button>
			);
		} else if (userProgress === 100) {
			return (
				<button
					onClick={restartTraining}
					className="w-[300px] h-[52px] bg-[#BCEC30] rounded-[46px] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] text-lg"
				>
					Начать заново
				</button>
			);
		} else {
			return (
				<button
					onClick={openTrainingSelectModal}
					className="w-[300px] h-[52px] bg-[#BCEC30] rounded-[46px] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] text-lg"
				>
					Продолжить
				</button>
			);
		}
	};

	return (
		<div
			key={courseId}
			className="card w-[343px] sm:w-[360px] bg-white rounded-[30px] flex flex-col gap-6 shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)]"
		>
			<img className="" src={image} alt={nameRu} />
			<div className="cardImage relative">
				<button
					onClick={deleteCourse}
					className="addCourse w-[32px] h-[32px] absolute top-[-330px] right-5"
					title="Удалить курс"
				>
					<svg className="w-[32px] h-[32px]">
						<use xlinkHref="./icon/sprite.svg#icon-minus" />
					</svg>
				</button>
			</div>
			<div className="flex flex-col gap-5 mx-[21px] sm:mx-[30px]">
				<div className="courseTitle">
					<h3 className="text-[32px] font-medium text-left">{nameRu}</h3>
				</div>
				<div className="courseParams flex flex-row flex-wrap gap-1.5 mb-[15px]">
					<p className="parameter bg-[#F7F7F7] p-2.5 rounded-full flex flex-row gap-1.5 items-center">
						<svg className="w-[15px] h-[15px]">
							<use xlinkHref="./icon/sprite.svg#icon-calendar" />
						</svg>
						25 дней
					</p>
					<p className="parameter bg-[#F7F7F7] p-2.5 rounded-full flex flex-row gap-1.5 items-center">
						<svg className="w-[15px] h-[15px]">
							<use xlinkHref="./icon/sprite.svg#icon-time" />
						</svg>
						20-50 мин/день
					</p>
					<p className="parameter bg-[#F7F7F7] p-2.5 rounded-full flex flex-row gap-1.5 items-center">
						<svg className="w-[18px] h-[18px]">
							<use xlinkHref="./icon/sprite.svg#icon-complexity" />
						</svg>
						Сложность
					</p>
					<div className="w-full h-[36px] flex flex-col justify-center gap-[10px] opacity-100 mt-[20px]">
						<div className="text-lg text-start">Прогресс {userProgress}%</div>
						<div className="relative w-full h-[6px] bg-gray-300 rounded-full">
							<div className="absolute top-0 left-0 h-[6px] bg-[#00C1FF]" style={{ width: `${userProgress}%` }}></div>
						</div>
					</div>
					<div className="items-center mt-[40px]">
						{renderButton()}
						{isTrainingSelectModalOpen && (
							<TrainingSelectModal courseId={courseId} closeModal={closeTrainingSelectModal} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserCards;
