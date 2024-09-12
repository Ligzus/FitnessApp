import { useState } from "react";
import UserCards from "../Card/UserCards/UserCards";
import PasswordChange from "../Modal/PasswordChange/PasswordChange";
import PasswordChangeSuccess from "../Modal/PasswordChange/PasswordChangeSuccess";
import { auth } from "../../utils/firebase";

function Profile() {
	const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
	const [isPasswordChanged, setIsPasswordChanged] = useState(false);

	const openPasswordModal = () => {
		setIsPasswordModalOpen(true);
		setIsPasswordChanged(false);
	};
	const closePasswordModal = () => setIsPasswordModalOpen(false);

	const handlePasswordChange = () => {
		setIsPasswordChanged(true);
	};

	function scrollToCourses() {
		const element = document.getElementById("my_courses");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}

	return (
		<div>
			<div className="mt-[40px] sm:mt-[60px]">
				<h2 className="text-[24px] sm:text-[40px] mb-[24px] sm:mb-[40px] font-medium text-left leading-none">
					Профиль
				</h2>

				<div className="flex flex-col sm:flex-row bg-[#FFFFFF] rounded-[28px] items-center px-[33px] py-[30px] sm:gap-[33px] shadow-[0px_4px_67px_-12px_#00000021]">
					<div>
						<img className="w-[141px] sm:w-[197px]" src="./profile-photo.svg" alt="profile-photo" />
					</div>

					<div className="flex-col items-start mt-[28px] sm:mt-[0px]">
						<p className="text-[24px] sm:text-[32px] font-medium text-start mb-[18px] sm:mb-[30px]">Сергей</p>

						<div className="flex flex-col items-start mb-[20px] sm:mb-[30px]">
							<p>Логин: {auth.currentUser?.email}</p>
							<p>Пароль: 4fkhdj880d</p>
						</div>

						<div className="flex-col flex sm:flex-row gap-[10px]">
							<button
								className="w-[300px] h-[50px] sm:w-[192px] sm:h-[52px] bg-[#BCEC30] rounded-[46px] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] text-lg"
								onClick={openPasswordModal}
							>
								Изменить пароль
							</button>
							<button className="w-[300px] h-[50px] sm:w-[192px] sm:h-[52px] border border-black bg-[#ffffff] rounded-[46px] hover:bg-[#E9ECED] active:bg-[#000000] active:text-[#FFFFFF] text-lg">
								Выйти
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-[24px] sm:mt-[60px]">
				<h2
					id="my_courses"
					className="text-[24px] sm:text-[40px] mb-[24px] sm:mb-[40px] font-medium text-left leading-none"
				>
					Мои курсы
				</h2>
				<div className="flex flex-row flex-wrap gap-10 justify-center">
					<UserCards />
					<UserCards />
					<UserCards />
				</div>

				<div className="lg:hidden flex flex-row justify-end mt-[24px]">
					<button
						onClick={scrollToCourses}
						className="w-[127px] h-[52px] bg-[#BCEC30] rounded-[46px] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] text-lg leading-3"
					>
						Наверх
					</button>
				</div>
			</div>

			{isPasswordModalOpen && !isPasswordChanged && (
				<PasswordChange closeModal={closePasswordModal} onSubmit={handlePasswordChange} />
			)}

			{isPasswordModalOpen && isPasswordChanged && <PasswordChangeSuccess closeModal={closePasswordModal} />}
		</div>
	);
}

export default Profile;
