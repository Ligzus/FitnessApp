import React from 'react';

interface HeaderProps {
  openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
  return (
    <div className="header flex flex-row justify-between">
      <div className="headerLogo">
        <img className="w-56 h-9 mb-[15px]" src="./logo.svg" alt="logo" />
        <p className="text-lg opacity-50">Онлайн-тренировки для занятий дома</p>
      </div>
      <div className="headerButton">
		{/* Эта часть кода будет отображаться после реализации логики логина и появления пользователя в состоянии: */}

        {/*<div className="flex gap-[16px] items-center">
          <img src="./profile-photo-mini.svg" alt="profile-photo-mini" />
          <p className="text-[24px]">Сергей</p>
          <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.3553 1.03308L6.67773 6.7107L1.00012 1.03308" stroke="black" stroke-width="2"/>
          </svg>
        </div> */}

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
