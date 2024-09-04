import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
	openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);

	const toggleModal = () => {
		setModalVisible((prevModalVisible) => !prevModalVisible);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
			setModalVisible(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="header flex flex-row justify-between relative">
			<Link to={"/"} className="headerLogo">
				<img className="w-56 h-9 mb-[15px]" src="./logo.svg" alt="logo" />
				<p className="text-lg opacity-50">Онлайн-тренировки для занятий дома</p>
			</Link>
			<div className="headerButton">
				{/* Эта часть кода будет отображаться после реализации логики логина и появления пользователя в состоянии: */}

				<div onClick={toggleModal} className="flex gap-[16px] items-center cursor-pointer">
					<img src="./profile-photo-mini.svg" alt="profile-photo-mini" />

					<p className="text-[24px]">Сергей</p>

					<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.3553 1.03308L6.67773 6.7107L1.00012 1.03308" stroke="black" strokeWidth="2" />
					</svg>
				</div>

				{/* Модалка пользователя при клике на Имя: */}
				<div
					ref={modalRef}
					className={
						modalVisible
							? "w-[266px] p-[30px] mt-[24px] bg-white rounded-[28px] absolute right-0 shadow-[0px_4px_67px_-12px_#00000021]"
							: "hidden"
					}
				>
					<div className="mb-[30px]">
						<p className="text-[18px] font-medium text-center">Сергей</p>
						<p className="text-[18px] font-medium text-center text-gray-400 mb-[18px]">sergey.petrov96@mail.ru</p>
					</div>

					<div className="flex flex-col items-center gap-4">
						<Link
							to={"/profile"}
							className="flex text-black text-lg font-normal flex-row justify-center items-center p-4 gap-2 w-full h-[52px] bg-[#BCEC30] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] rounded-[46px]"
						>
							Мой профиль
						</Link>

						<Link
							to={"/course"}
							className="flex text-black text-lg font-normal flex-row justify-center items-center p-4 gap-2 w-full h-[52px] border border-black rounded-[46px] hover:bg-[#E9ECED] active:bg-[#000000] active:text-[#FFFFFF]"
						>
							Выйти
						</Link>
					</div>
				</div>

				<button
					onClick={openModal}
					className="bg-[#BCEC30] px-[26px] py-[16px] rounded-[46px] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] text-lg"
				>
					Войти
				</button>
			</div>
		</div>
	);
};

export default Header;
