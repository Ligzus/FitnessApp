import { Link } from "react-router-dom";
import { CardType } from "../../types/cards";
import { useUser } from "../../hooks/useUser";
import { addCourseToUser } from "../../utils/api";

function Card({ courseId, image, nameRu }: CardType) {
	const { user } = useUser();

	function addCourse() {
		addCourseToUser(user.uid, courseId)
			.then(() => {
				console.log("Курс добавлен в избранное");
			})
			.catch((error) => {
				console.error("Ошибка при добавлении курса:", error);
			});
	}

	return (
		<Link
			to={`/course/${courseId}`} // Передаем ID курса в URL
			className="card w-[343px] lg:w-[360px] bg-white rounded-[30px] flex flex-col gap-6 shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)]"
			key={courseId}
		>
			<div className="cardImage relative">
				<img className="" src={image} alt={nameRu} />
				<button
					onClick={addCourse}
					className="addCourse w-[32px] h-[32px] absolute top-5 right-5"
					title="Добавить курс"
				>
					<svg className="w-[32px] h-[32px]">
						<use xlinkHref="./icon/sprite.svg#icon-plus" />
					</svg>
				</button>
			</div>
			<div className="parameters flex flex-col gap-5 mx-[30px]">
				<div className="courseTitle flex justify-start">
					<h3 className="text-[24px] sm:text-[32px] font-medium text-left">{nameRu}</h3>
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
				</div>
			</div>
		</Link>
	);
}

export default Card;
