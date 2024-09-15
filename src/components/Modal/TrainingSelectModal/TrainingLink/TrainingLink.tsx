import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface TrainingLinkProps {
  name: string;
  trainingId: string;
  courseId: string;
  onVisited: (trainingId: string, visited: boolean) => void;
}

function TrainingLink({ name, trainingId, courseId, onVisited }: TrainingLinkProps) {
  const [visited, setVisited] = useState(false);

  const linkPath = `/training/${courseId}/${trainingId}`;

  useEffect(() => {
	const visitedLinks = JSON.parse(localStorage.getItem("visitedLinks") || "[]");
	if (visitedLinks.includes(linkPath)) {
	  setVisited(true);
	  onVisited(trainingId, true); // Сообщаем родительскому компоненту, что элемент посещен
	}
  
	// Очистка состояния при удалении курса
	return () => {
	  const remainingLinks = JSON.parse(localStorage.getItem("visitedLinks") || "[]").filter(
		(link: string) => link !== linkPath
	  );
	  localStorage.setItem("visitedLinks", JSON.stringify(remainingLinks));
	};
  }, [linkPath]);
  

  const handleLinkClick = () => {
    const visitedLinks = JSON.parse(localStorage.getItem("visitedLinks") || "[]");
    if (!visitedLinks.includes(linkPath)) {
      visitedLinks.push(linkPath);
      localStorage.setItem("visitedLinks", JSON.stringify(visitedLinks));
      setVisited(true);
      onVisited(trainingId, true); // Обновляем состояние посещения
    }
  };

  return (
    <div className="flex gap-[10px] w-full text-start items-center border-b-2">
      <svg className="w-[24px] h-[24px]">
        <use xlinkHref={`./icon/sprite.svg#${visited ? "icon-check" : "icon-uncheck"}`} />
      </svg>
      <Link to={`/training/${courseId}/${trainingId}`} target="_blank" className="w-[280px]" onClick={handleLinkClick}>
        <p className="text-[14px] py-[10px]">{name}</p>
      </Link>
    </div>
  );
}

export default TrainingLink;
