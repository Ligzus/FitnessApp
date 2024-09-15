import { useState } from "react";

function TrainingProgressItem({ exercise, onQuantityChange }: any) {
	const [realQuantity, setRealQuantity] = useState<number | ''>(0); // Поддерживаем состояние пустого значения

	const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value === '' ? '' : Number(e.target.value);
		setRealQuantity(value);
		// Передаем название упражнения и его количество
		onQuantityChange(exercise.name, value ? value : 0);
		console.log(value);
	};

	const handleBlur = () => {
		if (realQuantity === '') {
			setRealQuantity(0); // Сброс на 0 при пустом значении
		}
	};

	return (
		<div className="flex flex-col gap-2 w-full">
			<label className="text-black text-[16px] text-start font-medium">{exercise.name}</label>
			<input
				type="number"
				placeholder={exercise.quantity}
				value={realQuantity || 0}
				className="text-[16px] placeholder:opacity-[60%] w-full h-[47px] text-base font-normal text-black-400 border border-gray-300 rounded-[8px] p-[16px]"
				onChange={handleQuantityChange}
				onBlur={handleBlur} // Добавляем обработчик onBlur
			/>
		</div>
	);
}

export default TrainingProgressItem;
