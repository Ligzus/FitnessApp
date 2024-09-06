import Card from "../../components/Card/Card";

function Main() {
	function scrollToCourses() {
		const element = document.getElementById("top");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}

	return (
		<>
			<div id="top" className="description flex flex-row justify-between h-[120px] mt-[60px] mb-[50px]">
				<h1 className="text-[60px] font-medium text-left leading-none">
					Начните заниматься спортом и улучшите качество жизни
				</h1>
				<img className="h-[120px]" src="./description-img.svg" alt="description" />
			</div>
			<div className="coursCards flex flex-row flex-wrap gap-10">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<div className="flex flex-row justify-center mt-[34px] mb-[81px]">
				<button
					onClick={scrollToCourses}
					className="w-[127px] h-[52px] bg-[#BCEC30] rounded-[46px] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] text-lg leading-3"
				>
					Наверх
				</button>
			</div>
		</>
	);
}

export default Main;
