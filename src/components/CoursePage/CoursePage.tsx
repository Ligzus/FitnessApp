function CoursePage() {
  return (
	<div>
		<div>
			{/* Если ширина экрана до 640px, то отображать этот div */}
			<div className="block sm:hidden w-full bg-[#FFC700] h-[350px] rounded-[20px] flex items-end justify-center">
				<div className="overflow-hidden rounded-[20px]">
					<img src="./yoga-card.png" alt="yoga-card"/>
				</div>
			</div>

			{/* Если ширина экрана от 640px, то отображать этот div */}
			<div className="hidden sm:flex w-full h-[200px] sm:h-[310px] bg-[#FFC700] justify-between md:pr-[70px] rounded-[20px] mt-[40px] sm:mt-[60px]">
				<p className="text-white text-[45px] md:text-[60px] font-bold p-[30px] md:p-[40px]">Йога</p>
				<div className="overflow-hidden rounded-[20px]">
					<img src="./yoga-card.png" alt="yoga-card" className="h-[120%] sm:mt-[-80px]" />
				</div>
			</div>
		</div>


      <div className="mt-[40px] sm:mt-[60px]">
        <h2 className="text-[24px] sm:text-[40px] mb-[25px] sm:mb-[40px] font-medium text-left leading-none">Подойдет для вас, если:</h2>

        <div className="flex flex-col xl:flex-row mt-[20px] sm:mt-[40px] gap-[17px] justify-between">
          <div className="w-full xl:w-[368px] h-[141px] md:h-[110px] xl:h-[141px] pl-[15px] pr-[15px] flex bg-gradient-to-r from-[#151720] to-[#1E212E] items-center rounded-[20px]">
            <p className="text-[#BCEC30] text-[75px] font-medium">1</p>
            <p className="text-left text-white text-[18px] sm:text-[24px] ml-[15px] sm:ml-[25px] leading-7">
              Давно хотели попробовать йогу, но не решались начать
            </p>
          </div>
          <div className="w-full xl:w-[431px] h-[141px] md:h-[110px] xl:h-[141px] pl-[15px] pr-[15px] flex bg-gradient-to-r from-[#151720] to-[#1E212E] items-center rounded-[20px]">
            <p className="text-[#BCEC30] text-[75px] font-medium">2</p>
            <p className="text-left text-white text-[18px] sm:text-[24px] ml-[15px] sm:ml-[25px] leading-7">
              Хотите укрепить позвоночник, избавиться от болей в спине и суставах
            </p>
          </div>
          <div className="w-full xl:w-[327px] h-[141px] md:h-[110px] xl:h-[141px] pl-[15px] pr-[15px] flex bg-gradient-to-r from-[#151720] to-[#1E212E] items-center rounded-[20px]">
            <p className="text-[#BCEC30] text-[75px] font-medium">3</p>
            <p className="text-left text-white text-[18px] sm:text-[24px] ml-[15px] sm:ml-[25px] leading-7">
              Ищете активность, полезную для тела и души
            </p>
          </div>
        </div>

        <h2 className="text-[24px] sm:text-[40px] mt-[40px] sm:mt-[60px] mb-[25px] sm:mb-[40px] font-medium text-left leading-none">Направления</h2>

        <div className="bg-[#BCEC30] flex flex-col lg:flex-row w-full h-[336px] sm:h-[340px] lg:h-[146px] p-[30px] rounded-[20px] justify-between">
          <div className="flex flex-col justify-between w-full sm:w-[284px] h-[78px] sm:h-[86px]">
            <p className="text-[18px] sm:text-[24px] text-left">✦ Йога для новичков</p>
            <p className="text-[18px] sm:text-[24px] text-left">✦ Классическая йога</p>
          </div>
          <div className="flex flex-col justify-between w-full sm:w-[284px] h-[78px] sm:h-[86px]">
            <p className="text-[18px] sm:text-[24px] text-left">✦ Кундалини-йога</p>
            <p className="text-[18px] sm:text-[24px] text-left">✦ Йогатерапия</p>
          </div>
          <div className="flex flex-col justify-between w-full sm:w-[284px] h-[78px] sm:h-[86px]">
            <p className="text-[18px] sm:text-[24px] text-left">✦ Хатха-йога</p>
            <p className="text-[18px] sm:text-[24px] text-left">✦ Аштанга-йога</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="mt-[156px] sm:mt-[102px] bg-white flex relative rounded-[20px] overflow-hidden shadow-[0px_4px_67px_-12px_#00000021] z-30">
          <div className="p-[30px] sm:p-[40px] h-[400px] lg:h-[486px] z-20">
            <div className="w-full lg:w-[437px]">
              <h2 className="lg:pr-[40px] text-[32px] sm:text-[34px] md:text-[46px] md:text-[56px] font-medium text-left leading-none mb-[20px] sm:mb-[28px]">
                Начните путь к новому телу
              </h2>
              <div className="text-left text-[18px] sm:text-[22px] md:text-[24px] opacity-60">
				<div className="flex gap-2">
					<span>•</span>
					<p> проработка всех групп мышц</p>
				</div>
				<div className="flex gap-2">
					<span>•</span>
					<p> тренировка суставов</p>
				</div>
				<div className="flex gap-2">
					<span>•</span>
					<p> улучшение циркуляции крови</p>
				</div>
				<div className="flex gap-2">
					<span>•</span>
					<p> упражнения заряжают бодростью</p>
				</div>
				<div className="flex gap-2">
					<span>•</span>
					<p> помогают противостоять стрессам</p>
				</div>
              </div>

              <button className="w-full h-[50px] bg-[#BCEC30] rounded-[40px] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] md:text-lg mt-[20px] sm:mt-[28px]">
                Войдите, чтобы добавить курс
              </button>
            </div>
          </div>
			
          <img className="hidden absolute right-[-15px] top-[20px] z-10 lg:block lg:opacity-[20%] xl:opacity-[100%]" src="./lines.svg" alt="lines" />
        </div>

        <img className="absolute top-[-270px] right-[-72px] sm:top-[-420px] sm:right-[-90px] lg:right-[20px] lg:top-[-80px] lg:top-[-100px] z-20 lg:z-30" src="./men.png" alt="men" />
		<svg className="sm:hidden top-[-177px] right-[165px] absolute z-10" width="30" height="28" viewBox="0 0 55 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3 46.0947C6 37.5947 20.2 17.1947 53 3.59473" stroke="black" stroke-width="6"/>
		</svg>

		<svg className="sm:hidden top-[-135px] right-[-15px] absolute z-10" width="375" height="290" viewBox="0 0 375 290" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M306.773 252.122C592.337 -146.318 16.1411 27.4986 0.857649 155.11C-2.75302 185.258 38.2014 194.154 99.6254 180.667C161.049 167.18 -99.0882 266.476 20.3958 284.721" stroke="#C6FF00" stroke-width="10.1395"/>
		</svg>

      </div>
    </div>
  );
}

export default CoursePage;
