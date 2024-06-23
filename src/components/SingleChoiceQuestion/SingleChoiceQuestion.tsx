import { ChangeEvent, FC } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../store/store';

interface SingleChoiceQuestionProps {
	question: any;
	handleAnswerChange: (answer: string | string[]) => void;
}

const SingleChoiceQuestion: FC<SingleChoiceQuestionProps> = props => {
	const { question, handleAnswerChange } = props;
	const answers = useAppSelector((state: RootState) => state.test.answers);

	if (!question) {
		return null;
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleAnswerChange(e.target.value);
	};

	return (
		<div>
			<p>{question.question}</p>
			{question.options?.map((option: any, index: number) => (
				<label key={index}>
					<input
						checked={answers[question.id] === option}
						type='radio'
						name={`question-${question.id}`}
						value={option}
						onChange={handleChange}
					/>
					{option}
				</label>
			))}
		</div>
	);
};

export default SingleChoiceQuestion;
