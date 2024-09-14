import React from "react";
import "./TrainingProgressModal.css";
import TrainingProgressItem from "../TrainingProgressItem/TrainingProgressItem";

interface ModalProps {
	closeModal: () => void;
	onSubmit: () => void;
	exercises: any[];
}

const TrainingProgressModal: React.FC<ModalProps> = ({ closeModal, onSubmit, exercises }) => {
	return (
		<div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50" onClick={closeModal}>
			<div
				className="relative flex flex-col items-center p-10 gap-8 w-[350px] h-[572px] bg-white shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)] rounded-[30px] overflow-hidden"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex flex-col items-start gap-3 w-full h-full">
					<h2 className="text-black text-[34px] font-medium mb-[10px]">Мой прогресс</h2>

					<div className="flex flex-col gap-5 w-full h-[350px] overflow-y-auto leading-5 pr-[24px]">					
						
						{exercises.map((exercise, index) => (
							<TrainingProgressItem key={index} name={exercise.name} />
						))}
					</div>
				</div>
				<div className="flex items-center w-full">
					<button
						className="flex text-black font-medium text-lg font-medium flex-row justify-center items-center w-full h-[52px] bg-[#BCEC30] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] rounded-[46px]"
						onClick={onSubmit}
					>
						Сохранить
					</button>
				</div>
			</div>
		</div>
	);
};

export default TrainingProgressModal;
