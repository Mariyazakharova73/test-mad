import { ChangeEvent, FC } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../store/store';

interface LongAnswerQuestionProps {
	question: any;
	handleAnswerChange: (answer: string | string[]) => void;
}

const LongAnswerQuestion: FC<LongAnswerQuestionProps> = props => {
	const { question, handleAnswerChange } = props;
	const answers = useAppSelector((state: RootState) => state.test.answers);

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		handleAnswerChange(e.target.value);
	};

	return (
		<div>
			<p>{question.question}</p>
			<textarea
				name={`question-${question.id}`}
				onChange={handleChange}
				value={answers[question.id] || ''}
			></textarea>
		</div>
	);
};

export default LongAnswerQuestion;
