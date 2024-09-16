import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExerciseProgress from './ExerciseProgress';

describe('ExerciseProgress', () => {
  test('should render correctly with progress', () => {
    const exercise = { name: 'Push Ups', quantity: 20 };
    const progress = 10;

    render(<ExerciseProgress exercise={exercise} progress={progress} />);

    // Проверяем, что прогресс-бар имеет правильную ширину
    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveStyle('width: 50%');
  });

  test('should render correctly without progress', () => {
    const exercise = { name: 'Push Ups', quantity: 20 };
    const progress = 0;

    render(<ExerciseProgress exercise={exercise} progress={progress} />);

    // Проверяем, что прогресс-бар имеет ширину 0%
    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveStyle('width: 0%');
  });

  test('should render correctly when progress is greater than required', () => {
    const exercise = { name: 'Push Ups', quantity: 20 };
    const progress = 30;

    render(<ExerciseProgress exercise={exercise} progress={progress} />);

    // Проверяем, что прогресс-бар имеет ширину 100%
    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveStyle('width: 100%');
  });
});
