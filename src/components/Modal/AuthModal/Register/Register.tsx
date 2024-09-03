import React from 'react';

interface ModalProps {
  closeModal: () => void;
  toggleModal: () => void;
}

const Register: React.FC<ModalProps> = ({ closeModal, toggleModal }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50" onClick={closeModal}>
      <div
        className="relative flex flex-col items-center p-10 gap-12 w-[360px] h-[auto] bg-white shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)] rounded-[30px]"
        onClick={(e) => e.stopPropagation()}
      >
        <img src="./logo.svg" alt="logo" />

        <div className="flex flex-col items-center gap-8 w-[280px] h-[auto]">
          <div className="flex flex-col items-start gap-[10px] w-[280px]">
            <div className="flex flex-row items-center gap-2 w-[280px] h-[52px] border border-gray-300 rounded-[8px]">
              <input
                type="text"
                placeholder="Имя"
                className="text-[18px] w-full h-[49px] text-base font-normal text-black-400 rounded-[8px] p-[18px]"
              />
            </div>

            <div className="flex flex-row items-center gap-2 w-[280px] h-[52px] border border-gray-300 rounded-[8px]">
              <input
                type="email"
                placeholder="Эл. почта"
                className="text-[18px] w-full h-[49px] text-base font-normal text-black-400 rounded-[8px] p-[18px]"
              />
            </div>

            <div className="flex flex-row items-center gap-2 w-[280px] h-[52px] border border-gray-300 rounded-[8px]">
              <input
                type="password"
                placeholder="Пароль"
                className="text-[18px] w-full h-[49px] text-base font-normal text-black-400 rounded-[8px] p-[18px]"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-[280px]">
            <button className="flex text-black text-lg font-normal flex-row justify-center items-center p-4 gap-2 w-full h-[52px] bg-[#BCEC30] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] rounded-[46px]">
              Зарегистрироваться
            </button>

            <button
              className="flex text-black text-lg font-normal flex-row justify-center items-center p-4 gap-2 w-full h-[52px] border border-black rounded-[46px] hover:bg-[#E9ECED] active:bg-[#000000] active:text-[#FFFFFF]"
              onClick={toggleModal}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
