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
			<div id="top" className="description flex flex-row mb-[34px] justify-between h-[120px] mt-[39px] sm:mt-[60px] sm:mb-[50px]">
				<h1 className="text-[32px] sm:text-[60px] font-medium text-left leading-none">
					Начните заниматься спортом и улучшите качество жизни
				</h1>
				<img className="h-[120px] hidden sm:block" src="./description-img.svg" alt="description" />
			</div>
			<div className="coursCards flex flex-col justify-center sm:justify-normal sm:flex-row sm:flex-wrap gap-6 sm:gap-10">
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
