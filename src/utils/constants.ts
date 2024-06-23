import { QuestionType } from '../types/types';

export const INITIAL_TIME = 600;

export const DATA = [
	{
		id: 0,
		type: QuestionType.SHORT,
		question: 'Как Вас зовут',
	},
	{
		id: 1,
		type: QuestionType.SINGLE,
		question: 'Какой Ваш любимый цвет?',
		options: ['Красный', 'Зеленый', 'Синий'],
	},
	{
		id: 2,
		type: QuestionType.SINGLE,
		question: 'Какое Ваше любимое время года?',
		options: ['Осень', 'Зима', 'Весна', 'Лето'],
	},
	{
		id: 3,
		type: QuestionType.MULTIPLE,
		question: 'Какие фрукты Вы любите?',
		options: ['Яблоко', 'Банан', 'Апельсин', 'Гранат'],
	},

	{
		id: 4,
		type: QuestionType.LONG,
		question: 'Опишите свой самый запоминающийся опыт.',
	},
];
