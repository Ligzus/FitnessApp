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
