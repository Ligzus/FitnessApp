import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TrainingType } from "../../../../types/training";

function TrainingLink({ name, trainingId, courseId }: TrainingType) {
	const [visited, setVisited] = useState(false);

	const linkPath = `/training/${courseId}/${trainingId}`;

	useEffect(() => {
		// Проверяем, есть ли ссылка в списке посещенных в localStorage
		const visitedLinks = JSON.parse(localStorage.getItem("visitedLinks") || "[]");
		if (visitedLinks.includes(linkPath)) {
			setVisited(true);
		}
	}, [linkPath]);

	const handleLinkClick = () => {
		// Обновляем список посещенных ссылок
		const visitedLinks = JSON.parse(localStorage.getItem("visitedLinks") || "[]");
		if (!visitedLinks.includes(linkPath)) {
			visitedLinks.push(linkPath);
			localStorage.setItem("visitedLinks", JSON.stringify(visitedLinks));
			setVisited(true); // Меняем состояние на "посещено"
		}
	};

	return (
		<div className="flex gap-[10px] w-full text-start items-center border-b-2">
			<svg className="w-[24px] h-[24px]">
				<use xlinkHref={`./icon/sprite.svg#${visited ? "icon-check" : "icon-uncheck"}`} />
			</svg>
			<Link to={linkPath} className="w-[280px]" onClick={handleLinkClick}>
				<p className="text-[14px] py-[10px]">{name}</p>
			</Link>
		</div>
	);
}

export default TrainingLink;
