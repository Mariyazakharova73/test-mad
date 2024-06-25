import { Question, QuestionVariant } from '../types/types';

export const INITIAL_TIME = 600;

export const TEST_DATA_LS = 'testState';
export const TIMER__LS = 'timer';

export const DATA: Question[] = [
	{
		id: 0,
		type: QuestionVariant.SHORT,
		question: 'Как Вас зовут?',
		fieldName: 'username',
		validateMessage: 'Пожалуйста, введите свое имя!',
	},
	{
		id: 1,
		type: QuestionVariant.SINGLE,
		question: 'Какой Ваш любимый цвет?',
		options: ['Красный', 'Зеленый', 'Синий'],
		fieldName: 'color',
		validateMessage: 'Пожалуйста, выберите вариант ответа!',
	},
	{
		id: 2,
		type: QuestionVariant.SINGLE,
		question: 'Какое Ваше любимое время года?',
		options: ['Осень', 'Зима', 'Весна', 'Лето'],
		fieldName: 'season',
		validateMessage: 'Пожалуйста, выберите вариант ответа!',
	},
	{
		id: 3,
		type: QuestionVariant.MULTIPLE,
		question: 'Какие фрукты Вы любите?',
		options: ['Яблоко', 'Банан', 'Апельсин', 'Гранат'],
		fieldName: 'checkboxGroup',
		validateMessage:
			'Пожалуйста, выберите один или несколько вариантов ответа!',
	},

	{
		id: 4,
		type: QuestionVariant.LONG,
		question: 'Опишите свой самый запоминающийся опыт.',
		fieldName: 'experience',
		validateMessage: 'Пожалуйста, заполните поле!',
	},
];
