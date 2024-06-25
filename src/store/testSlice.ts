import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question } from '../types/types';
import { TEST_DATA_LS } from '../utils/constants';

interface TestState {
	questions: Question[];
	answers: { [key: string]: string | string[] };
	currentQuestionIndex: number;
}

const loadFromLocalStorage = () => {
	try {
		const serializedState = localStorage.getItem(TEST_DATA_LS);
		return serializedState ? JSON.parse(serializedState) : undefined;
	} catch (e) {
		console.error('Не удалось загрузить состояние:', e);
		return undefined;
	}
};

const initialState: TestState = loadFromLocalStorage() || {
	questions: [],
	answers: {},
	currentQuestionIndex: 0,
};

const saveStateToLocalStorage = (state: TestState) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem(TEST_DATA_LS, serializedState);
	} catch (e) {
		console.warn('Не удалось сохранить состояние в localStorage:', e);
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
			action: PayloadAction<{ name: string; answer: any }>
		) {
			state.answers[action.payload.name] = action.payload.answer;
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
