import React, { useEffect, useState } from "react";
import "./TrainingSelectModal.css";
import TrainingLink from "./TrainingLink/TrainingLink";
import { getCourseById, getWorkoutsById } from "../../../utils/api";

interface ModalProps {
	closeModal: () => void;
	courseId: string;
}

const TrainingSelectModal: React.FC<ModalProps> = ({ closeModal, courseId }) => {
	const [courseData, setCourseData] = useState<[]>([]);
	const [workoutInfo, setWorkoutInfo] = useState<any[]>([]);

	useEffect(() => {
		getCourseById(courseId)
		.then((data) => {
			setCourseData(data.workouts);
		})
		.catch((error) => console.error(error));
	}, [courseId]);

	useEffect(() => {
		async function fetchWorkoutInfo() {
			if (courseData.length > 0) {
				try {
					const workoutInfoArray = await Promise.all(
						courseData.map(async (workout) => {
							const response = await getWorkoutsById(workout);
							return response;
						})
					);
					setWorkoutInfo(workoutInfoArray);
				} catch (error) {
					console.error("Ошибка при получении информации о курсе:", error);
				}
			}
		}
		fetchWorkoutInfo();
	}, [courseData])

	return (
		<div className="fixed z-40 inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50" onClick={closeModal}>
			<div
				className="relative flex flex-col items-center p-8 gap-8 w-[350px] bg-white shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)] rounded-[30px] overflow-hidden"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex flex-col items-start gap-3 w-full h-full">
					<h2 className="text-black text-[34px] text-start leading-10 font-medium mb-[20px]">Выберите тренировку</h2>

					<div className="flex flex-col gap-3 w-full h-[374px] overflow-y-auto leading-5 pr-[20px]">
						{workoutInfo.map((workout, index) => (
                            <TrainingLink key={index} trainingId={workout._id} name={workout.name} courseId={courseId} />
                        ))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrainingSelectModal;
