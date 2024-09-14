function TrainingProgressItem({ name }: any) {
	return (
		<div className="flex flex-col gap-2 w-full">
            <label className="text-black text-[16px] text-start font-medium">
                {name}
            </label>
            <input
                type="number"
                placeholder="0"
                className="text-[16px] placeholder:opacity-[60%] w-full h-[47px] text-base font-normal text-black-400 border border-gray-300 rounded-[8px] p-[16px]"
            />
        </div>
	);
}

export default TrainingProgressItem;