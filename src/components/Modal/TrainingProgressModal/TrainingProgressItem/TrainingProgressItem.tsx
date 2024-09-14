import { useState } from "react";

function TrainingProgressItem({ exercise, onQuantityChange }: any) {
    const [realQuantity, setRealQuantity] = useState<number | undefined>();

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setRealQuantity(value);
        // Передаем название упражнения и его количество
        onQuantityChange(exercise.name, value);
    };

    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="text-black text-[16px] text-start font-medium">
                {exercise.name}
            </label>
            <input
                type="number"
                placeholder={exercise.quantity}
                value={realQuantity || ""}
                className="text-[16px] placeholder:opacity-[60%] w-full h-[47px] text-base font-normal text-black-400 border border-gray-300 rounded-[8px] p-[16px]"
                onChange={handleQuantityChange}
            />
        </div>
    );
}

export default TrainingProgressItem;
