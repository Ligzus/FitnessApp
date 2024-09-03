function CoursePage() {
    return (
        <div>
            <div>
                <div className="w-full h-[310px] bg-[#FFC700] flex justify-between pr-[70px] rounded-[30px] mt-[60px]">
                    <p className="text-white text-[60px] font-bold p-[40px]">Йога</p>   
                    <div className="overflow-hidden">
                      <img src="./yoga-card.png" alt="./yoga-card" className="h-[125%] mt-[-80px]"/> 
                    </div>                                   
                </div>
            </div>

            <div className="mt-[60px]">
                <h2 className="text-[40px] mb-[40px] font-medium text-left leading-none">
                    Подойдет для вас, если:
                </h2>

                <div className="flex mt-[40px] justify-between">
                    <div className="w-[368px] h-[141px] pl-[20px] pr-[20px] flex bg-gradient-to-r from-[#151720] to-[#1E212E] items-center rounded-[28px]">
                        <p className="text-[#BCEC30] text-[75px] font-medium">1</p>
                        <p className="text-left text-white text-[24px] ml-[25px] leading-7">Давно хотели попробовать йогу, но не решались начать</p>
                    </div>
                    <div className="w-[431px] h-[141px] pl-[20px] pr-[20px] flex bg-gradient-to-r from-[#151720] to-[#1E212E] items-center rounded-[28px]">
                        <p className="text-[#BCEC30] text-[75px] font-medium">2</p>
                        <p className="text-left text-white text-[24px] ml-[25px] leading-7">Хотите укрепить позвоночник, избавиться от болей в спине и суставах</p>
                    </div>
                    <div className="w-[327px] h-[141px] pl-[20px] pr-[20px] flex bg-gradient-to-r from-[#151720] to-[#1E212E] items-center rounded-[28px]">
                        <p className="text-[#BCEC30] text-[75px] font-medium">3</p>
                        <p className="text-left text-white text-[24px] ml-[25px] leading-7">Ищете активность, полезную для тела и души</p>
                    </div>
                </div>

                <h2 className="text-[40px] mt-[60px] mb-[40px] font-medium text-left leading-none">
                    Направления
                </h2>

                <div className="bg-[#BCEC30] flex w-full h-[146px] p-[30px] rounded-[28px] justify-between">
                    <div className="flex flex-col justify-between w-[284px]">
                        <p className="col-span-1 text-[24px] text-left">✦ Йога для новичков</p>
                        <p className="col-span-1 text-[24px] text-left">✦ Классическая йога</p>
                    </div>

                    <div className="flex flex-col justify-between w-[284px]">
                        <p className="col-span-1 text-[24px] text-left">✦ Кундалини-йога</p>
                        <p className="col-span-1 text-[24px] text-left">✦ Йогатерапия</p>
                    </div>

                    <div className="flex flex-col justify-between w-[284px]">
                        <p className="col-span-1 text-[24px] text-left">✦ Хатха-йога</p>                   
                        <p className="col-span-1 text-[24px] text-left">✦ Аштанга-йога</p>
                    </div>
                </div>


            </div>

            <div className="relative">
                <div className="mt-[102px] bg-white flex relative rounded-[30px] overflow-hidden">
                    <div className="p-[40px] h-[486px]">
                        <div className="w-[437px]">
                        <h2 className="pr-[40px] text-[56px] font-medium text-left leading-none mb-[28px]">
                            Начните путь к новому телу
                        </h2>
                        <div className="text-left text-[24px] opacity-60">
                            <p>• проработка всех групп мышц</p>
                            <p>• тренировка суставов</p>
                            <p>• улучшение циркуляции крови</p>
                            <p>• упражнения заряжают бодростью</p>
                            <p>• помогают противостоять стрессам</p>
                        </div>

                        <button className="w-[100%] h-[52px] bg-[#BCEC30] rounded-[46px] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] text-lg mt-[28px]">
                          Войдите, чтобы добавить курс
                        </button>
                        </div>                        
                    </div>

                    
                    <img className="absolute right-[-20px] top-[25px]" src="./lines.svg" alt="lines" />
                </div>              
                
                <img className="absolute right-[20px] top-[-100px]" src="./men.png" alt="men" />
            </div>
        </div>
    )
};

export default CoursePage;
