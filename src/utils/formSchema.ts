import { array, object, string } from 'yup';

export const formSchema = object({
	username: string()
		.required('Поле обязательно для заполнения')
		.min(2, 'Минимальная длина - 2 символа'),
	color: string().required('Поле обязательно для заполнения'),
	season: string().required('Поле обязательно для заполнения'),
	checkboxGroup: array()
		.of(string().required('Поле обязательно для заполнения'))
		.min(1, 'Минимум один ответ обязателен')
		.required('Поле обязательно для заполнения'),
	experience: string()
		.required('Поле обязательно для заполнения')
		.min(2, 'Минимальная длина - 2 символа'),
});
