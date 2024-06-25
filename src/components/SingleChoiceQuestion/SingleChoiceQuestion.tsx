import { Checkbox, Flex } from 'antd';
import { FormikErrors, FormikTouched } from 'formik';
import { FC } from 'react';
import { FormValues, SingleChoiceQuestionType } from '../../types/types';
import s from './SingleChoiceQuestion.module.css'

interface SingleChoiceQuestionProps {
	question: SingleChoiceQuestionType;
	handleAnswerChange: (answer: string) => void;
	errors: FormikErrors<FormValues>;
	touched: FormikTouched<FormValues>;
	values: FormValues;
	handleBlur: (e: React.FocusEvent<HTMLDivElement>) => void;
}

const SingleChoiceQuestion: FC<SingleChoiceQuestionProps> = props => {
	const { question, handleAnswerChange, errors, touched, values, handleBlur } =
		props;

	if (!question) {
		return null;
	}

	const handleChange = (option: string) => {
		handleAnswerChange(option);
	};

	return (
		<Flex
			vertical
			gap='small'
			onBlur={handleBlur}
		>
			{question.options?.map((option: string, index: number) => (
				<Checkbox
					className={s.checkbox}
					key={index}
					name={question.fieldName}
					value={values[question.fieldName]}
					onChange={() => handleChange(option)}
					checked={values[question.fieldName] === option}
					type='checkbox'
				>
					{option}
				</Checkbox>
			))}
			{errors[question.fieldName] && touched[question.fieldName] && (
				<div className='error'>{errors[question.fieldName]}</div>
			)}
		</Flex>
	);
};

export default SingleChoiceQuestion;
