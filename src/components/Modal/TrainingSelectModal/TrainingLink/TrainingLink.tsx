import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../../hooks/useUser";
import { getWorkoutProgress } from "../../../../utils/api";

interface TrainingLinkProps {
	name: string;
	trainingId: string;
	courseId: string;
}

function TrainingLink({ name, trainingId, courseId }: TrainingLinkProps) {
	const [workoutProgress, setWorkoutProgress] = useState<number>();
	const { user } = useUser();

	useEffect(() => {
		getWorkoutProgress(user.uid, courseId, trainingId).then((response) => {
			console.log(response);
			setWorkoutProgress(response.workouts);
		});
	}, []);

	return (
		<div className="flex gap-[10px] w-full text-start items-center border-b-2">
			<svg className="w-[24px] h-[24px]">
				<use xlinkHref={`./icon/sprite.svg#${workoutProgress === 100 ? "icon-check" : "icon-uncheck"}`} />
			</svg>
			<Link to={`/training/${courseId}/${trainingId}`} className="w-[280px]">
				<p className="text-[14px] py-[10px]">{name}</p>
			</Link>
		</div>
	);
}

export default TrainingLink;
