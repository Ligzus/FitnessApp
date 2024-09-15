const baseHost = "https://fitness-pro-67b02-default-rtdb.europe-west1.firebasedatabase.app/";
export async function getCourse() {
	try {
		const response = await fetch(baseHost + `courses.json`);
		if (!response.ok) {
			if (response.status === 401) {
				throw new Error("Невозможно получить список курсов");
			} else {
				throw new Error(`Ошибка! Статус: ${response.status}`);
			}
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.warn(error);
		throw error;
	}
}

export async function addUser(uuid: string) {
	try {
		const response = await fetch(baseHost + `users/${uuid}.json`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				uuid: `${uuid}`,
			}),
		});
		if (!response.ok) {
			if (response.status === 401) {
				throw new Error("Невозможно добавить пользователя");
			} else {
				throw new Error(`Ошибка! Статус: ${response.status}`);
			}
		}
	} catch (error) {
		console.warn(error);
		throw error;
	}
}

export async function addCourseToUser(uuid: string, courseId: string) {
	try {
		const response = await fetch(baseHost + `users/${uuid}/courses/${courseId}.json`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: `${courseId}`,
			}),
		});
		if (!response.ok) {
			if (response.status === 401) {
				throw new Error("Невозможно добавить курс пользователю");
			} else {
				throw new Error(`Ошибка! Статус: ${response.status}`);
			}
		}
	} catch (error) {
		console.warn(error);
		throw error;
	}
}

export async function deleteCourseToUser(uuid: string, courseId: string) {
	fetch(baseHost + `/users//${uuid}/courses/${courseId}.json`, {
		method: "DELETE",
	})
		.then((response) => {
			if (response.ok) {
				console.log("Курс успешно удален");
			} else {
				console.error("Ошибка при удалении курса");
			}
		})
		.catch((error) => {
			console.error("Ошибка:", error);
		});
}

export async function getUserCourses(uuid: string) {
	try {
		const response = await fetch(baseHost + `users/${uuid}/courses.json`);
		if (!response.ok) {
			if (response.status === 401) {
				throw new Error("Невозможно получить список курсов пользователя");
			} else {
				throw new Error(`Ошибка! Статус: ${response.status}`);
			}
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.warn(error);
		throw error;
	}
}

export async function getCourseById(courseId: string) {
	try {
		const response = await fetch(baseHost + `courses/${courseId}.json`);
		if (!response.ok) {
			if (response.status === 401) {
				throw new Error("Невозможно получить курс");
			} else {
				throw new Error(`Ошибка! Статус: ${response.status}`);
			}
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.warn(error);
		throw error;
	}
}

export async function getWorkoutsById(id: string) {
	try {
		const response = await fetch(baseHost + `workouts/${id}.json`);
		if (!response.ok) {
			if (response.status === 401) {
				throw new Error("Невозможно получить тренировку");
			} else {
				throw new Error(`Ошибка! Статус: ${response.status}`);
			}
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.warn(error);
		throw error;
	}
}

export async function addRealQuantity(
	uuid: string,
	courseId: string,
	workout_Id: string,
	exercises: { name: string; quantity: number }[],
) {
	try {
		const response = await fetch(baseHost + `users/${uuid}/courses/${courseId}/workouts/${workout_Id}.json`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ exercises }), // Отправляем массив объектов
		});
		if (!response.ok) {
			throw new Error(`Ошибка! Статус: ${response.status}`);
		}
	} catch (error) {
		console.warn(error);
		throw error;
	}
}

export async function getRealQuantity(uuid: string, courseId: string, workout_Id: string) {
	try {
		const response = await fetch(baseHost + `users/${uuid}/courses/${courseId}/workouts/${workout_Id}.json`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new Error(`Ошибка! Статус: ${response.status}`);
		}

		// Парсим ответ и возвращаем данные
		const data = await response.json();
		const realQuantity = data.exercises.map((exercise: any) => exercise.quantity);

		return realQuantity;
	} catch (error) {
		console.warn(error);
		throw error;
	}
}
