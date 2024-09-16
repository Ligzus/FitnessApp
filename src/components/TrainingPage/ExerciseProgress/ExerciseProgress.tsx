function ExerciseProgress({ exercise, progress }: any) {
	const requiredProgress = exercise.quantity;
	const progressPercentage = (progress / requiredProgress) * 100;

	return (
		<>
			<div className="flex flex-col gap-[10px] w-[320px]">
				<div className="text-lg text-start">{exercise.name}</div>
				<div className="relative w-full h-[6px] bg-gray-300 rounded-full">
					<div
						data-testid="progress-bar"
						className="absolute top-0 left-0 h-[6px] bg-[#00C1FF]"
						style={{ width: `${progressPercentage < 100 ? progressPercentage : 100}%` }}
					></div>
				</div>
			</div>
		</>
	);
}

export default ExerciseProgress;
