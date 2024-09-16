import { useState, useEffect } from "react";
import TrainingSelectModal from "../../Modal/TrainingSelectModal/TrainingSelectModal";
import { CardType } from "../../../types/cards";
import { deleteCourseToUser } from "../../../utils/api";
import { useUser } from "../../../hooks/useUser";

type UserCardsProps = CardType & { onDelete: (courseId: string) => void };

function UserCards({ courseId, image, nameRu, onDelete }: UserCardsProps) {
  const [isTrainingSelectModalOpen, setTrainingSelectModalOpen] = useState(false);
  const [visitedRatio, setVisitedRatio] = useState<string>("0");
  const { user } = useUser();

  useEffect(() => {
    // При монтировании получаем прогресс из localStorage
    const storedProgress = localStorage.getItem(`progress_${courseId}`);
    if (storedProgress) {
      setVisitedRatio(storedProgress);
    }
  }, [courseId]);

  const openTrainingSelectModal = () => setTrainingSelectModalOpen(true);
  const closeTrainingSelectModal = () => setTrainingSelectModalOpen(false);

  function openResetedTrainingSelectModal(courseId: string) {    
    // Очищаем прогресс из localStorage
    localStorage.removeItem(`progress_${courseId}`);
  
    // Очищаем все ссылки на тренировки данного курса
    const visitedLinks = JSON.parse(localStorage.getItem("visitedLinks") || "[]");
    const filteredLinks = visitedLinks.filter((link: string) => !link.startsWith(`/training/${courseId}/`));
    localStorage.setItem("visitedLinks", JSON.stringify(filteredLinks));
  
    // Обновляем состояние прогресса
    setVisitedRatio("0");
  
    // Открываем модальное окно
    openTrainingSelectModal();
  }

  const handleResetedTrainingSelectModalClick = () => {
    openResetedTrainingSelectModal(courseId);
  };

  function deleteCourse() {
	deleteCourseToUser(user.uid, courseId)
		.then(() => {
		// Очищаем прогресс из localStorage
		localStorage.removeItem(`progress_${courseId}`);

		// Очищаем все ссылки на тренировки данного курса
		const visitedLinks = JSON.parse(localStorage.getItem("visitedLinks") || "[]");
		const filteredLinks = visitedLinks.filter((link: string) => !link.startsWith(`/training/${courseId}/`));
		localStorage.setItem("visitedLinks", JSON.stringify(filteredLinks));

		onDelete(courseId);
		})
		.catch((error) => {
		console.error("Ошибка при удалении курса:", error);
		});
  }
  

  const handleVisitedRatioChange = (ratio: string) => {
    setVisitedRatio(ratio);
    localStorage.setItem(`progress_${courseId}`, ratio); // Сохраняем прогресс в localStorage
  };

  return (
    <div
      key={courseId}
      className="card w-[343px] sm:w-[360px] bg-white rounded-[30px] flex flex-col gap-6 shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)]"
    >
      <img className="" src={image} alt={nameRu} />
      <div className="cardImage relative">
        <button
          onClick={deleteCourse}
          className="addCourse w-[32px] h-[32px] absolute top-[-330px] right-5"
          title="Удалить курс"
        >
          <svg className="w-[32px] h-[32px]">
            <use xlinkHref="./icon/sprite.svg#icon-minus" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-5 mx-[21px] sm:mx-[30px]">
        <div className="courseTitle">
          <h3 className="text-[32px] font-medium text-left">{nameRu}</h3>
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
            <div className="text-lg text-start">Прогресс {visitedRatio}%</div>
            <div className="relative w-full h-[6px] bg-gray-300 rounded-full">
              <div className="absolute top-0 left-0 h-[6px] bg-[#00C1FF]" style={{ width: `${visitedRatio}%` }}></div>
            </div>
          </div>
          <div className="items-center mt-[40px]">
            { visitedRatio !== "100" ? (
                <button
                  onClick={openTrainingSelectModal}
                  className="w-[300px] h-[52px] bg-[#BCEC30] rounded-[46px] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] text-lg"
                >
                  {(visitedRatio === "0") ? "Начать" : "Продолжить"}
                </button>) 
                : (
                  <button
                  onClick={handleResetedTrainingSelectModalClick}
                  className="w-[300px] h-[52px] bg-[#BCEC30] rounded-[46px] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] text-lg"
                >
                  Начать заново
                </button>
                )
            }
            {isTrainingSelectModalOpen && (
              <TrainingSelectModal 
                courseId={courseId} 
                closeModal={closeTrainingSelectModal}
                onVisitedRatioChange={handleVisitedRatioChange} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCards;
