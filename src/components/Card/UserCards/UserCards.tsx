function UserCards() {
	return (
		<div className="card w-[360px] bg-white rounded-[30px] flex flex-col gap-6 shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)]">
			<div className="cardImage relative">
				<img className="" src="./yoga-card.png" alt="yoga" />
				<button className="addCourse w-[32px] h-[32px] absolute top-5 right-5" title="Удалить курс">
					<svg className="w-[32px] h-[32px]">
						<use xlinkHref="./icon/sprite.svg#icon-minus" />
					</svg>
				</button>
			</div>
			<div className="parameters flex flex-col gap-5 mx-[30px]">
				<div className="courseTitle flex justify-start">
					<h3 className="text-[32px] font-medium">Йога</h3>
				</div>
				<div className="courseParams flex flex-row flex-wrap gap-1.5 mb-[15px]">
					<p className="parameter bg-[#F7F7F7] p-2.5 rounded-full flex flex-row gap-1.5 items-center">
						<svg className="w-[15px] h-[15px]">
							<use xlinkHref="./icon/sprite.svg#icon-calendar" />
						</svg>
						25 дней
					</p>
					<p className="parameter bg-[#F7F7F7] p-2.5 rounded-full flex flex-row gap-1.5 items-center">
						<svg className="w-[15px] h-[15px]">
							<use xlinkHref="./icon/sprite.svg#icon-time" />
						</svg>
						20-50 мин/день
					</p>
					<p className="parameter bg-[#F7F7F7] p-2.5 rounded-full flex flex-row gap-1.5 items-center">
						<svg className="w-[18px] h-[18px]">
							<use xlinkHref="./icon/sprite.svg#icon-complexity" />
						</svg>
						Сложность
					</p>
					<div className="w-full h-[36px] flex flex-col justify-center gap-[10px] opacity-100 mt-[20px]">
						<div className="text-lg text-start">Прогресс 40%</div>
						<div className="relative w-full h-[6px] bg-gray-300 rounded-full">
							<div className="absolute top-0 left-0 h-[6px] bg-[#00C1FF] w-[40%]"></div>
						</div>
					</div>
					<div className="w-[300px] items-center mt-[40px]">
						<button className="w-[192px] h-[52px] bg-[#BCEC30] rounded-[46px] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] text-lg">
							Продолжить
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserCards;
