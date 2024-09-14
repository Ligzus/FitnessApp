import { useState } from "react";

function TrainingProgressItem({ exercise }: any) {
    const [realQuantity, setrealQuantity] = useState<number | undefined>(undefined);
    // const requiredQuantity = exercise.quantity;

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
                onChange={(e) => setrealQuantity(Number(e.target.value))}
            />
        </div>
    );
}

export default TrainingProgressItem;
