import { Checkbox, Flex } from 'antd';
import { FormikErrors, FormikTouched } from 'formik';
import { FC } from 'react';
import { FormValues, MultipleChoiceQuestionType } from '../../types/types';
import s from './MultipleChoiceQuestion.module.css';

interface MultipleChoiceQuestionProps {
	question: MultipleChoiceQuestionType;
	handleAnswerChange: (answer: string[]) => void;
	errors: FormikErrors<FormValues>;
	touched: FormikTouched<FormValues>;
	values: FormValues;
	handleBlur: (e: React.FocusEvent<HTMLDivElement>) => void;
}

const MultipleChoiceQuestion: FC<MultipleChoiceQuestionProps> = props => {
	const { question, handleAnswerChange, errors, touched, values, handleBlur } =
		props;

	const handleChange = (checkedValues: string[]) => {
		handleAnswerChange(checkedValues);
	};

	const value = values[question.fieldName];
	const checkboxValue = Array.isArray(value) ? value : [];

	return (
		<Flex vertical gap='small' onBlur={handleBlur}>
			<Checkbox.Group
				className={s.container}
				name={question.fieldName}
				value={checkboxValue}
				onChange={handleChange}
				options={question.options.map((option: string) => ({
					label: option,
					value: option,
				}))}
			></Checkbox.Group>
			{errors[question.fieldName] && touched[question.fieldName] && (
				<div className='error'>{errors[question.fieldName]}</div>
			)}
		</Flex>
	);
};

export default MultipleChoiceQuestion;
