import UserCards from "../Card/UserCards/UserCards";

function Profile() {
	return (
		<div>
			<div className="mt-[60px]">
				<h2 className="text-[40px] mb-[40px] font-medium text-left leading-none">Профиль</h2>

				<div className="flex bg-[#FFFFFF] rounded-[28px]">
					<div className="px-[30px] py-[30px]">
						<img src="./profile-photo.svg" alt="profile-photo" />
					</div>

					<div className="px-[33px] py-[30px]">
						<p className="text-[32px] font-medium text-start mb-[30px]">Сергей</p>

						<div className="flex flex-col items-start mb-[30px]">
							<p>Логин: sergey.petrov96</p>
							<p>Пароль: 4fkhdj880d</p>
						</div>

						<div className="flex gap-[10px]">
							<button className="w-[192px] h-[52px] bg-[#BCEC30] rounded-[46px] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] text-lg">
								Изменить пароль
							</button>
							<button className="w-[192px] h-[52px] border border-black bg-[#ffffff] rounded-[46px] hover:bg-[#E9ECED] active:bg-[#000000] active:text-[#FFFFFF] text-lg">
								Выйти
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-[60px]">
				<h2 className="text-[40px] mb-[40px] font-medium text-left leading-none">Мои курсы</h2>
				<div className="coursCards flex flex-row flex-wrap gap-10">
					<UserCards />
					<UserCards />
					<UserCards />
				</div>
			</div>
		</div>
	);
}

export default Profile;
