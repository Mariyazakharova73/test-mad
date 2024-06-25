import { Flex, Input } from 'antd';
import { FormikErrors, FormikTouched } from 'formik';
import { ChangeEvent, FC } from 'react';
import { FormValues, ShortAnswerQuestionType } from '../../types/types';

interface ShortAnswerQuestionProps {
	question: ShortAnswerQuestionType;
	handleAnswerChange: (answer: string) => void;
	errors: FormikErrors<FormValues>;
	touched: FormikTouched<FormValues>;
	values: FormValues;
	handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const ShortAnswerQuestion: FC<ShortAnswerQuestionProps> = props => {
	const { question, handleAnswerChange, errors, touched, values, handleBlur } =
		props;

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleAnswerChange(e.target.value);
	};

	return (
		<Flex vertical gap='small'>
			<Input
				name={question.fieldName}
				value={values[question.fieldName] || ''}
				onChange={handleChange}
				onBlur={handleBlur}
				placeholder='Введите ваш ответ'
				type='text'
			/>
			{errors[question.fieldName] && touched[question.fieldName] && (
				<div className='error'>{errors[question.fieldName]}</div>
			)}
		</Flex>
	);
};

export default ShortAnswerQuestion;
