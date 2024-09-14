import { useEffect, useState } from "react";
import UserCards from "../Card/UserCards/UserCards";
import PasswordChange from "../Modal/PasswordChange/PasswordChange";
import PasswordChangeSuccess from "../Modal/PasswordChange/PasswordChangeSuccess";
import { useUser } from "../../hooks/useUser"; // Используем контекст пользователя
import { getCourseById, getUserCourses } from "../../utils/api";

function Profile() {
	const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
	const [isPasswordChanged, setIsPasswordChanged] = useState(false);
	const { user, logoutUser } = useUser(); // Получаем пользователя и метод выхода
	const [isLoaded, setIsLoaded] = useState(false);
	const [userCourses, setUserCourses] = useState<any[]>([]);
	const [courseInfoArray, setCourseInfoArray] = useState<any[]>([]);

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

	useEffect(() => {
		async function fetchUserCourses() {
			let responseArray = [];
			const response = await getUserCourses(user.uid);
			for (let i = 0; i < Object.keys(response).length; i++) {
				responseArray.push(response[Object.keys(response)[i]]);
			}
			setUserCourses(responseArray);
		}

		fetchUserCourses();
	}, []);

	const handleDeleteCourse = (courseId: string) => {
		setCourseInfoArray(courseInfoArray.filter(course => course._id !== courseId));
	};

	useEffect(() => {
		async function fetchCourseInfo() {
			if (userCourses.length > 0) {
				try {
					const courseInfoArray = await Promise.all(
						userCourses.map(async (course) => {
							const response = await getCourseById(course.id);
							return response;
						})
					);
					setCourseInfoArray(courseInfoArray);
					setIsLoaded(true);
				} catch (error) {
					console.error("Ошибка при получении информации о курсе:", error);
				}
			}
		}
	
		fetchCourseInfo();
	}, [userCourses]);

	if (!user) {
		return <p>Загрузка...</p>; // Пока данные пользователя загружаются
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
							<p>Логин: {user.email}</p> {/* Используем email из контекста */}
							<p>Пароль: 4fkhdj880d</p> {/* Пример пароля (заглушка) */}
						</div>

						<div className="flex-col flex sm:flex-row gap-[10px]">
							<button
								className="w-[300px] h-[50px] sm:w-[192px] sm:h-[52px] bg-[#BCEC30] rounded-[46px] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] text-lg"
								onClick={openPasswordModal}
							>
								Изменить пароль
							</button>
							<button
								onClick={logoutUser}
								className="w-[300px] h-[50px] sm:w-[192px] sm:h-[52px] border border-black bg-[#ffffff] rounded-[46px] hover:bg-[#E9ECED] active:bg-[#000000] active:text-[#FFFFFF] text-lg"
							>
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
				<div className="flex flex-row flex-wrap gap-10 justify-start">
					{isLoaded ? (
						courseInfoArray.map((courseItem: any) => (
							<UserCards
								key={courseItem._id}
								courseId={courseItem._id}
								image={courseItem.images.cardImage}
								nameRu={courseItem.nameRU}
								onDelete={handleDeleteCourse} 
							/>
						))
					) : (
						<div>
							<p>Страница загружается</p>
						</div>
					)}
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
