import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Integration Tests', () => {
  test('renders home page initially', () => {
    render(<App />);
    const welcomeElement = screen.getByText(/Welcome/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  test('navigates to quiz when Start Quiz is clicked', async () => {
    render(<App />);
    const startButton = screen.getByText(/Start Quiz/i);
    await userEvent.click(startButton);
    
    const questionsTitle = screen.getByText(/My Questions/i);
    expect(questionsTitle).toBeInTheDocument();
  });

  test('renders Capital question in quiz', async () => {
    render(<App />);
    const startButton = screen.getByText(/Start Quiz/i);
    await userEvent.click(startButton);
    
    const questionElement = screen.getByText(/What is the capital of Connecticut?/i);
    expect(questionElement).toBeInTheDocument();
  });

  test('selects the Hartford radio button', async () => {
    render(<App />);
    const startButton = screen.getByText(/Start Quiz/i);
    await userEvent.click(startButton);

    const hartfordRadio = screen.getByRole('radio', { name: /Hartford/i });
    await userEvent.click(hartfordRadio);

    expect(hartfordRadio).toBeChecked();
  });

  test('selects Prime radio button for number question', async () => {
    render(<App />);
    const startButton = screen.getByText(/Start Quiz/i);
    await userEvent.click(startButton);

    const primeRadio = screen.getByRole('radio', { name: /Prime/i });
    await userEvent.click(primeRadio);

    expect(primeRadio).toBeChecked();
  });

  test('shows correct alert when correct answer is clicked', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<App />);
    const startButton = screen.getByText(/Start Quiz/i);
    await userEvent.click(startButton);

    const fourRadioButton = screen.getByRole('radio', { name: /^4$/i });
    await userEvent.click(fourRadioButton);

    expect(alertMock).toHaveBeenCalledWith('You are correct!');
    alertMock.mockRestore();
  });

  test('shows incorrect alert when wrong answer is clicked', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<App />);
    const startButton = screen.getByText(/Start Quiz/i);
    await userEvent.click(startButton);

    const wrongRadioButton = screen.getByRole('radio', { name: /^8$/i });
    await userEvent.click(wrongRadioButton);

    expect(alertMock).toHaveBeenCalledWith('Sorry - not correct');
    alertMock.mockRestore();
  });

  test('displays score in quiz', async () => {
    render(<App />);
    const startButton = screen.getByText(/Start Quiz/i);
    await userEvent.click(startButton);

    const scoreElement = screen.getByText(/Score:/i);
    expect(scoreElement).toBeInTheDocument();
  });

  test('has Submit button in quiz', async () => {
    render(<App />);
    const startButton = screen.getByText(/Start Quiz/i);
    await userEvent.click(startButton);

    const submitButton = screen.getByText(/Submit/i);
    expect(submitButton).toBeInTheDocument();
  });

  test('has Reset button in quiz', async () => {
    render(<App />);
    const startButton = screen.getByText(/Start Quiz/i);
    await userEvent.click(startButton);

    const resetButton = screen.getByText(/Reset/i);
    expect(resetButton).toBeInTheDocument();
  });

  test('has View Results button in quiz', async () => {
    render(<App />);
    const startButton = screen.getByText(/Start Quiz/i);
    await userEvent.click(startButton);

    const resultsButton = screen.getByText(/View Results/i);
    expect(resultsButton).toBeInTheDocument();
  });

  test('updates score count when answer is selected', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<App />);
    const startButton = screen.getByText(/Start Quiz/i);
    await userEvent.click(startButton);

    // Initial score should be 0/0
    expect(screen.getByText(/Score: 0\/0/i)).toBeInTheDocument();

    // Click an answer
    const hartfordRadio = screen.getByRole('radio', { name: /Hartford/i });
    await userEvent.click(hartfordRadio);

    // Score should now be 1/1
    expect(screen.getByText(/Score: 1\/1/i)).toBeInTheDocument();

    alertMock.mockRestore();
  });

  test('prevents multiple answers to the same question', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<App />);
    const startButton = screen.getByText(/Start Quiz/i);
    await userEvent.click(startButton);

    // Click first answer
    const hartfordRadio = screen.getByRole('radio', { name: /Hartford/i });
    await userEvent.click(hartfordRadio);
    
    // Try to click another answer for the same question
    const stamfordRadio = screen.getByRole('radio', { name: /Stamford/i });
    await userEvent.click(stamfordRadio);

    // Alert should only be called once
    expect(alertMock).toHaveBeenCalledTimes(1);

    alertMock.mockRestore();
  });
});