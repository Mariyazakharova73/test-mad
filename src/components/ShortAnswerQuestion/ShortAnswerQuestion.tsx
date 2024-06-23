import { ChangeEvent, FC } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../store/store';

interface ShortAnswerQuestionProps {
	question: any;
	handleAnswerChange: (answer: string | string[]) => void;
}

const ShortAnswerQuestion: FC<ShortAnswerQuestionProps> = props => {
	const { question, handleAnswerChange } = props;
	const answers = useAppSelector((state: RootState) => state.test.answers);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleAnswerChange(e.target.value);
	};
	return (
		<div>
			<p>{question.question}</p>
			<input
				type='text'
				name={`question-${question.id}`}
				onChange={handleChange}
				value={answers[question.id] || ''}
			/>
		</div>
	);
};

export default ShortAnswerQuestion;
