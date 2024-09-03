import React, { useState } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';

interface AuthModalProps {
  closeModal: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ closeModal }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleModal = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div
        className="relative p-10 gap-12 w-[360px] bg-white shadow-lg rounded-[30px]"
        onClick={(e) => e.stopPropagation()}
      >
        {isLogin ? (
          <Login toggleModal={toggleModal} closeModal={closeModal} />
        ) : (
          <Register toggleModal={toggleModal} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
