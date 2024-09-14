function ExerciseProgress({ name }: any) {
	return (
		<div className="flex flex-col gap-[10px] w-[320px]">
			<div className="text-lg text-start">{name}</div>
			<div className="relative w-full h-[6px] bg-gray-300 rounded-full">
				<div className="absolute top-0 left-0 h-[6px] bg-[#00C1FF] w-[0%]"></div>
			</div>
		</div>
	);
}

export default ExerciseProgress;
