import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question } from '../types/types';

interface TestState {
	questions: Question[];
	answers: { [key: number]: any };
	currentQuestionIndex: number;
}

const loadFromLocalStorage = () => {
	try {
		const serializedState = localStorage.getItem('testState');
		return serializedState ? JSON.parse(serializedState) : undefined;
	} catch (e) {
		console.error('Could not load state', e);
		return undefined;
	}
};

const initialState: TestState = loadFromLocalStorage() || {
	questions: [],
	answers: {},
	currentQuestionIndex: 0,
};

// Функция для сохранения состояния в localStorage
const saveStateToLocalStorage = (state: TestState) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('testState', serializedState);
	} catch (e) {
		console.warn('Failed to save state to localStorage:', e);
	}
};

const testSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		loadQuiz(state, action: PayloadAction<Question[]>) {
			state.questions = action.payload;
			saveStateToLocalStorage(state);
		},
		answerQuestion(
			state,
			action: PayloadAction<{ questionId: number; answer: any }>
		) {
			state.answers[action.payload.questionId] = action.payload.answer;
			saveStateToLocalStorage(state);
		},
		nextQuestion(state) {
			if (state.currentQuestionIndex <= state.questions.length - 1) {
				state.currentQuestionIndex += 1;
				saveStateToLocalStorage(state);
			}
		},
		previousQuestion(state) {
			if (state.currentQuestionIndex > 0) {
				state.currentQuestionIndex -= 1;
				saveStateToLocalStorage(state);
			}
		},
		setCurrentQuestionIndex(state, action: PayloadAction<number>) {
			state.currentQuestionIndex = action.payload;
			saveStateToLocalStorage(state);
		},
		// saveProgress(state, action: PayloadAction<{ [key: number]: any }>) {
		// 	state.answers = { ...state.answers, ...action.payload };
		// 	localStorage.setItem('testProgress', JSON.stringify(state.answers));
		// },
		// loadProgress(state) {
		// 	const savedProgress = localStorage.getItem('testProgress');
		// 	if (savedProgress) {
		// 		state.answers = JSON.parse(savedProgress);
		// 	}
		// },
	},
});

export const {
	loadQuiz,
	answerQuestion,
	nextQuestion,
	previousQuestion,
	setCurrentQuestionIndex,
} = testSlice.actions;
export default testSlice.reducer;
