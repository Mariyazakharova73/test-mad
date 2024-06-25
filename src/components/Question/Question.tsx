import { FieldInputProps, FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { answerQuestion } from '../../store/testSlice';
import {
	FormValues,
	LongAnswerQuestionType,
	MultipleChoiceQuestionType,
	Question as QuestionType,
	QuestionVariant,
	ShortAnswerQuestionType,
	SingleChoiceQuestionType,
} from '../../types/types';
import LongAnswerQuestion from '../LongAnswerQuestion/LongAnswerQuestion';
import MultipleChoiceQuestion from '../MultipleChoiceQuestion/MultipleChoiceQuestion';
import ShortAnswerQuestion from '../ShortAnswerQuestion/ShortAnswerQuestion';
import SingleChoiceQuestion from '../SingleChoiceQuestion/SingleChoiceQuestion';

interface QuestionProps {
	question: QuestionType;
	handleChange: FieldInputProps<string | string[]>['onChange'];
	errors: FormikErrors<FormValues>;
	touched: FormikTouched<FormValues>;
	values: FormValues;
	handleBlur: (
		e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLDivElement>
	) => void;
}

const isSingleChoiceQuestion = (
	question: QuestionType
): question is SingleChoiceQuestionType =>
	question.type === QuestionVariant.SINGLE;

const isMultipleChoiceQuestion = (
	question: QuestionType
): question is MultipleChoiceQuestionType =>
	question.type === QuestionVariant.MULTIPLE;

const isShortAnswerQuestion = (
	question: QuestionType
): question is ShortAnswerQuestionType =>
	question.type === QuestionVariant.SHORT;

const isLongAnswerQuestion = (
	question: QuestionType
): question is LongAnswerQuestionType => question.type === QuestionVariant.LONG;

const Question: React.FC<QuestionProps> = props => {
	const { question, errors, touched, handleChange, values, handleBlur } = props;
	const dispatch = useAppDispatch();

	const handleAnswerChange = (answer: string | string[]) => {
		handleChange({ target: { name: question.fieldName, value: answer } });
		dispatch(answerQuestion({ name: question.fieldName, answer }));
	};

	if (isSingleChoiceQuestion(question)) {
		return (
			<SingleChoiceQuestion
				question={question}
				touched={touched}
				values={values}
				handleAnswerChange={handleAnswerChange}
				handleBlur={handleBlur}
				errors={errors}
			/>
		);
	} else if (isMultipleChoiceQuestion(question)) {
		return (
			<MultipleChoiceQuestion
				question={question}
				handleAnswerChange={handleAnswerChange}
				touched={touched}
				values={values}
				errors={errors}
				handleBlur={handleBlur}
			/>
		);
	} else if (isShortAnswerQuestion(question)) {
		return (
			<ShortAnswerQuestion
				question={question}
				touched={touched}
				values={values}
				handleAnswerChange={handleAnswerChange}
				handleBlur={handleBlur}
				errors={errors}
			/>
		);
	} else if (isLongAnswerQuestion(question)) {
		return (
			<LongAnswerQuestion
				question={question}
				touched={touched}
				values={values}
				handleAnswerChange={handleAnswerChange}
				handleBlur={handleBlur}
				errors={errors}
			/>
		);
	} else {
		return <div>Unknown question type</div>;
	}
};

export default Question;
