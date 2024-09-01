import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
	// Здесь нужна логика при которой кнопка входа при наличии User будет изменяться на имя пользователя, при клике на которое всплывает модалка с действиями.
	const [user, setUser] = useState<boolean>(false);

	const handleLogin = () => {
		setUser(prevUser => !prevUser);
	};

	return (
		<div className="header flex flex-row justify-between">
			<div className="headerLogo">
				<img className="w-56 h-9 mb-[15px]" src="./logo.svg" alt="logo" />
				<p className="text-lg opacity-50">Онлайн-тренировки для занятий дома</p> {/*Эта надпись есть не на всех страницах, но я думаю это косяк дизайна*/}
			</div>
			<div className="headerButton">
				
			<Link to="/profile" onClick={handleLogin}> {/*По готовности модалок тут сделаем логику появления модалки входа/регистрации*/}
				{user 
				? (	<div className="flex gap-[16px] items-center">
						<img src="./profile-photo-mini.svg" alt="profile-photo-mini" />
						<p className="text-[24px]">Сергей</p>
						<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12.3553 1.03308L6.67773 6.7107L1.00012 1.03308" stroke="black" stroke-width="2"/>
						</svg>
					</div>)
				: (<button className="bg-[#BCEC30] px-[26px] py-[16px] rounded-[46px] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] text-lg">
						Войти
					</button>)
				}				
        	</Link>
			</div>
		</div>
	);
}

export default Header;
