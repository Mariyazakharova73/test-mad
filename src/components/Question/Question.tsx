import React from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { answerQuestion } from '../../store/testSlice';
import {
	QuestionType as QType,
	Question as QuestionType,
} from '../../types/types';
import LongAnswerQuestion from '../LongAnswerQuestion/LongAnswerQuestion';
import MultipleChoiceQuestion from '../MultipleChoiceQuestion/MultipleChoiceQuestion';
import ShortAnswerQuestion from '../ShortAnswerQuestion/ShortAnswerQuestion';
import SingleChoiceQuestion from '../SingleChoiceQuestion/SingleChoiceQuestion';

interface QuestionProps {
	question: QuestionType;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
	const dispatch = useAppDispatch();

	const handleAnswerChange = (answer: string | string[]) => {
		if (question) {
			dispatch(answerQuestion({ questionId: question.id, answer }));
		}
	};

	switch (question?.type) {
		case QType.SINGLE:
			return (
				<SingleChoiceQuestion
					question={question}
					handleAnswerChange={handleAnswerChange}
				/>
			);
		case QType.MULTIPLE:
			return (
				<MultipleChoiceQuestion
					question={question}
					handleAnswerChange={handleAnswerChange}
				/>
			);
		case QType.SHORT:
			return (
				<ShortAnswerQuestion
					question={question}
					handleAnswerChange={handleAnswerChange}
				/>
			);
		case QType.LONG:
			return (
				<LongAnswerQuestion
					question={question}
					handleAnswerChange={handleAnswerChange}
				/>
			);
		default:
			return <div>Unknown question type</div>;
	}
};

export default Question;
