function Header() {
	return (
		<div className="header flex flex-row justify-between">
			<div className="headerLogo">
				<img className="w-56 h-9 mb-[15px]" src="./logo.svg" alt="logo" />
				<p className="text-lg opacity-50">Онлайн-тренировки для занятий дома</p>
			</div>
			<div className="headerButton">
				<button className="bg-[#BCEC30] px-[26px] py-[16px] rounded-[46px] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] text-lg">
					Войти
				</button>
			</div>
		</div>
	);
}

export default Header;
