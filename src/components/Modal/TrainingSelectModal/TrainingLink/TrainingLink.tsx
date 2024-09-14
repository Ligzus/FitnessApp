import { Link } from "react-router-dom";
import { TrainingType } from "../../../../types/training";

function TrainingLink({ name, trainingId, courseId }: TrainingType) {
	return (
		<div className="flex gap-[10px] w-full text-start items-center border-b-2">
			<svg className="w-[24px] h-[24px]">
				<use xlinkHref="./icon/sprite.svg#icon-check" />
			</svg>
			<Link to={`/training/${courseId}/${trainingId}`} className="w-[280px]">
				<p className="text-[14px] py-[10px]">{name}</p>
			</Link>
		</div>
	);
}

export default TrainingLink;
