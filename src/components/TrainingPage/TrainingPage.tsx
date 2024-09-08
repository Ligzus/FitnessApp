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
		<div className="flex flex-col mt-[40px] sm:mt-[60px] gap-[24px] sm:gap-[40px]">
			<div className="flex flex-col gap-[10px] sm:gap-[24px]">
				<h2 className="text-[24px] sm:text-[40px] lg:text-[60px] font-medium text-left leading-none">Йога</h2>
				<p className="text-[18px] sm:text-[22px] lg:text-[32px] text-left leading-none underline decoration-solid">
					Красота и здоровье / Йога на каждый день / 2 день
				</p>
			</div>

			<div className="flex justify-center bg-[#FFFFFF] rounded-[28px]">
				<iframe
					className="w-[343px] h-[189px] sm:w-full sm:h-[400px] md:h-[639px] rounded-[30px]"
					src="https://www.youtube.com/embed/v-xTLFDhoD0"
				></iframe>
			</div>

			<div className="flex flex-col gap-[20px] sm:gap-[40px] bg-[#FFFFFF] rounded-[28px] p-[30px] sm:p-[40px]">
				<h3 className="text-[32px] text-center md:text-start leading-9">Упражнения тренировки 2</h3>
				<div className="flex flex-row justify-center md:justify-start flex-wrap gap-x-[60px] gap-y-[20px]">
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
					className="flex sm:w-[320px] text-black text-lg font-normal flex-row justify-center items-center p-4 gap-2 h-[52px] bg-[#BCEC30] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] rounded-[46px]"
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
