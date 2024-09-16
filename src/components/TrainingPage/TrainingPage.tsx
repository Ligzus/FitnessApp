import ExerciseProgress from "./ExerciseProgress/ExerciseProgress";
import TrainingProgressModal from "../Modal/TrainingProgressModal/TrainingProgress/TrainingProgressModal";
import SaveTrainingProgressModal from "../Modal/TrainingProgressModal/SaveTrainingProgressModal";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addRealQuantity, getCourseById, getRealQuantity, getWorkoutsById } from "../../utils/api";
import { useUser } from "../../hooks/useUser";

function TrainingPage() {
	const [isTrainingProgressModalOpen, setIsTrainingProgressModalOpen] = useState(false);
	const [isSaveTrainingProgressModalOpen, setIsSaveTrainingProgressModalOpen] = useState(false);
	const { id, courseId } = useParams();
	const [workout, setWorkout] = useState<any>();
	const [exercises, setExercises] = useState<any[]>([]);
	const [exerciseProgress, setExerciseProgress] = useState<number[] | null>([]); // Добавлено состояние для прогресса упражнений
	const [isLoading, setIsLoading] = useState(true);
	const [courseData, setCourseData] = useState<string | null>();
	const { user } = useUser();

	const openTrainingProgressModal = () => {
		setIsTrainingProgressModalOpen(true);
		setIsSaveTrainingProgressModalOpen(false);
	};
	const closeTrainingProgressModal = () => setIsTrainingProgressModalOpen(false);

	const handleSaveTrainingProgress = (updatedQuantities: { [exerciseName: string]: number }) => {
		if (user.uid && courseId) {
			const exercisesData = Object.entries(updatedQuantities).map(([name, quantity]) => ({
				name,
				quantity,
			}));

			addRealQuantity(user.uid, courseId, workout._id, exercisesData)
				.then(() => {
					getRealQuantity(user.uid, courseId, workout._id).then((data) => {
						setExerciseProgress(data); // Сохраняем данные о прогрессе упражнений
					});
				})
				.catch((error) => console.error("Ошибка сохранения прогресса:", error));
		} else {
			console.error("ID тренировки или курса не найдены");
		}

		setIsSaveTrainingProgressModalOpen(true);
	};

	useEffect(() => {
		if (courseId) {
			getCourseById(courseId)
				.then((data) => {
					setCourseData(data.nameRU);
				})
				.catch((error) => console.error(error));
		}
	}, [courseId]);

	useEffect(() => {
		if (id) {
			getWorkoutsById(id)
				.then((data) => {
					setWorkout(data);
					setExercises(data.exercises);
				})
				.catch((error) => console.error(error))
				.finally(() => setIsLoading(false));
		}
	}, [id]);

	useEffect(() => {
		if (user.uid && courseId && workout) {
			getRealQuantity(user.uid, courseId, workout._id)
				.then((data) => {
					if (data) {
						setExerciseProgress(data);
					}
				})
				.catch((error) => console.error(error));
		}
	}, [user, courseId, workout]);

	return (
		<>
			{isLoading ? (
				<p>Загрузка курса...</p>
			) : (
				<div className="flex flex-col mt-[40px] sm:mt-[60px] gap-[24px] sm:gap-[40px]">
					<div className="flex flex-col gap-[10px] sm:gap-[24px]">
						<h2 className="text-[24px] sm:text-[40px] lg:text-[60px] font-medium text-left leading-none">
							{courseData}
						</h2>
						<p className="text-[18px] sm:text-[22px] lg:text-[32px] text-left leading-none underline decoration-solid">
							{workout.name}
						</p>
					</div>

					<div className="flex justify-center bg-[#FFFFFF] rounded-[28px]">
						<iframe
							className="w-[343px] h-[189px] sm:w-full sm:h-[400px] md:h-[639px] rounded-[30px]"
							src={workout.video}
						></iframe>
					</div>

					<div className="flex flex-col gap-[20px] sm:gap-[40px] bg-[#FFFFFF] rounded-[28px] p-[30px] sm:p-[40px]">
						{exercises ? (
							<>
								<h3 className="text-[32px] text-center md:text-start leading-9">Упражнения тренировки</h3>
								<div className="flex flex-row justify-center md:justify-start flex-wrap gap-x-[60px] gap-y-[20px]">
									{exercises.map((exercise, index) => {
										return (
											<ExerciseProgress
												key={index}
												exercise={exercise}
												progress={exerciseProgress ? exerciseProgress[index] : 0}
											/>
										);
									})}
								</div>
								<button
									onClick={openTrainingProgressModal}
									className="flex sm:w-[320px] text-black text-lg font-normal flex-row justify-center items-center p-4 gap-2 h-[52px] bg-[#BCEC30] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] rounded-[46px]"
								>
									Заполнить свой прогресс
								</button>
								{isTrainingProgressModalOpen && !isSaveTrainingProgressModalOpen && (
									<TrainingProgressModal
										closeModal={closeTrainingProgressModal}
										onSubmit={handleSaveTrainingProgress}
										exercises={exercises}
										workout_Id={workout._id}
										exerciseProgress={exerciseProgress}
									/>
								)}
								{isTrainingProgressModalOpen && isSaveTrainingProgressModalOpen && (
									<SaveTrainingProgressModal closeModal={closeTrainingProgressModal} />
								)}
							</>
						) : (
							<h3 className="text-[32px] text-center md:text-start leading-9">Нет упражнений</h3>
						)}
					</div>
				</div>
			)}
		</>
	);
}

export default TrainingPage;
