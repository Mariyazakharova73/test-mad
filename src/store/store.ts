import { configureStore } from '@reduxjs/toolkit';
import testReducer from './testSlice';

// Функция для загрузки состояния из localStorage


// const preloadedState = loadFromLocalStorage();

export const store = configureStore({
	reducer: {
		test: testReducer,
	},
	// preloadedState: {
	// 	test: preloadedState,
	// },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
