import { Flex } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { FormikErrors, FormikTouched } from 'formik';
import { ChangeEvent, FC } from 'react';
import { FormValues, LongAnswerQuestionType } from '../../types/types';

interface LongAnswerQuestionProps {
	question: LongAnswerQuestionType;
	handleAnswerChange: (answer: string) => void;
	errors: FormikErrors<FormValues>;
	touched: FormikTouched<FormValues>;
	values: FormValues;
	handleBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

const LongAnswerQuestion: FC<LongAnswerQuestionProps> = props => {
	const { question, handleAnswerChange, errors, touched, values, handleBlur } =
		props;

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		handleAnswerChange(e.target.value);
	};

	return (
		<Flex vertical gap='small'>
			<TextArea
				name={question.fieldName}
				onBlur={handleBlur}
				value={values[question.fieldName]}
				onChange={handleChange}
				placeholder='Введите ваш ответ'
				autoSize={{ minRows: 3, maxRows: 5 }}
			/>
			{errors[question.fieldName] && touched[question.fieldName] && (
				<div className='error'>{errors[question?.fieldName]}</div>
			)}
		</Flex>
	);
};

export default LongAnswerQuestion;
