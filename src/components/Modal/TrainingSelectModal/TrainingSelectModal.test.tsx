import { render, screen, act } from "@testing-library/react";
import TrainingSelectModal from "./TrainingSelectModal";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Мокируем функции для API
jest.mock("../../../utils/api", () => ({
	getCourseById: jest.fn().mockResolvedValue({
		workouts: ["workout1", "workout2"],
	}),
	getWorkoutsById: jest
		.fn()
		.mockResolvedValue({
			_id: "workout1",
			name: "Workout 1",
		})
		.mockResolvedValueOnce({
			_id: "workout2",
			name: "Workout 2",
		}),
}));

describe("TrainingSelectModal", () => {
	it("должен правильно рассчитывать visitedRatio и передавать его в onVisitedRatioChange", async () => {
		const mockCloseModal = jest.fn();
		const mockOnVisitedRatioChange = jest.fn();

		await act(async () => {
			render(
				<MemoryRouter>
					<TrainingSelectModal
						closeModal={mockCloseModal}
						courseId="course1"
						onVisitedRatioChange={mockOnVisitedRatioChange}
					/>
				</MemoryRouter>,
			);
		});

		// Проверка наличия текста
		expect(screen.getByText("Выберите тренировку")).toBeInTheDocument();

		// Имитация посещения тренировки
		const links = screen.getAllByText(/Workout/i);
		act(() => {
			// Эмулируем клик по первой тренировке
			links[0].click();
		});

		// Проверка вызова mockOnVisitedRatioChange
		expect(mockOnVisitedRatioChange).toHaveBeenCalledWith("50"); // В зависимости от того, сколько тренировок было посещено
	});
});
