import ExerciseProgress from "./ExerciseProgress/ExerciseProgress";
import TrainingProgressModal from "../Modal/TrainingProgressModal/TrainingProgressModal";
import SaveTrainingProgressModal from "../Modal/TrainingProgressModal/SaveTrainingProgressModal";
import { useState } from "react";

function TrainingPage() {
	const [isTrainingProgressModalOpen, setIsTrainingProgressModalOpen] = useState(false);
	const [isSaveTrainingProgressModalOpen, setIsSaveTrainingProgressModalOpen] = useState(false);

	const openTrainingProgressModal = () => {
		setIsTrainingProgressModalOpen(true);
		setIsSaveTrainingProgressModalOpen(false);
	};
	const closeTrainingProgressModal = () => setIsTrainingProgressModalOpen(false);

	const handleSaveTrainingProgress = () => setIsSaveTrainingProgressModalOpen(true);

	return (
		<div className="flex flex-col mt-[60px] gap-[40px]">
			<div className="flex flex-col gap-[24px]">
				<h2 className="text-[60px] font-medium text-left leading-none">Йога</h2>
				<p className="text-[32px] text-left leading-none underline decoration-solid">
					Красота и здоровье / Йога на каждый день / 2 день
				</p>
			</div>

			<div className="flex bg-[#FFFFFF] rounded-[28px]">
				<iframe
					className="w-[1160px] h-[639px] rounded-[30px]"
					src="https://www.youtube.com/embed/v-xTLFDhoD0"
				></iframe>
			</div>

			<div className="flex flex-col gap-[40px] bg-[#FFFFFF] rounded-[28px] p-[40px]">
				<h3 className="text-[32px] text-start">Упражнения тренировки 2</h3>
				<div className="flex flex-row flex-wrap gap-x-[60px] gap-y-[20px]">
					<ExerciseProgress />
					<ExerciseProgress />
					<ExerciseProgress />
					<ExerciseProgress />
					<ExerciseProgress />
					<ExerciseProgress />
					<ExerciseProgress />
					<ExerciseProgress />
					<ExerciseProgress />
				</div>
				<button
					onClick={openTrainingProgressModal}
					className="flex w-[320px] text-black text-lg font-normal flex-row justify-center items-center p-4 gap-2 w-full h-[52px] bg-[#BCEC30] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] rounded-[46px]"
				>
					Заполнить свой прогресс
				</button>
				{isTrainingProgressModalOpen && !isSaveTrainingProgressModalOpen && (
					<TrainingProgressModal closeModal={closeTrainingProgressModal} onSubmit={handleSaveTrainingProgress} />
				)}
				{isTrainingProgressModalOpen && isSaveTrainingProgressModalOpen && (
					<SaveTrainingProgressModal closeModal={closeTrainingProgressModal} />
				)}
			</div>
		</div>
	);
}

export default TrainingPage;
