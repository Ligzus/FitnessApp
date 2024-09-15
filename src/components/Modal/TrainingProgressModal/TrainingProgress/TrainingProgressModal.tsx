import React, { useState, useEffect } from "react";
import "./TrainingProgressModal.css";
import TrainingProgressItem from "../TrainingProgressItem/TrainingProgressItem";

interface ModalProps {
	closeModal: () => void;
	onSubmit: (updatedQuantities: { [key: string]: number }) => void;
	exercises: any[];
	workout_Id: string;
}

const TrainingProgressModal: React.FC<ModalProps> = ({ closeModal, onSubmit, exercises }) => {
	// Инициализируем состояния со значениями по умолчанию
	const [updatedQuantities, setUpdatedQuantities] = useState<{ [exerciseName: string]: number }>({});

	useEffect(() => {
		// Устанавливаем начальные значения для всех упражнений при загрузке модального окна
		const initialQuantities: { [key: string]: number } = {};
		exercises.forEach((exercise) => {
			initialQuantities[exercise.name] = 0; // Используем начальные значения (например, 0)
		});
		setUpdatedQuantities(initialQuantities);
	}, [exercises]);

	const handleQuantityChange = (exerciseName: string, realQuantity: number) => {
		setUpdatedQuantities((prev) => ({
			...prev,
			[exerciseName]: realQuantity,
		}));
	};

	const handleSubmit = () => {
		onSubmit(updatedQuantities); // Передаем все значения
	};

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
							<TrainingProgressItem
								key={index}
								exercise={exercise}
								onQuantityChange={handleQuantityChange}
							/>
						))}
					</div>
				</div>
				<div className="flex items-center w-full">
					<button
						className="flex text-black font-medium text-lg font-medium flex-row justify-center items-center w-full h-[52px] bg-[#BCEC30] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] rounded-[46px]"
						onClick={handleSubmit}
					>
						Сохранить
					</button>
				</div>
			</div>
		</div>
	);
};

export default TrainingProgressModal;
