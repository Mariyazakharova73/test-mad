import { ChangeEvent, FC } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../store/store';

interface MultipleChoiceQuestionProps {
	question: any;
	handleAnswerChange: (answer: string | string[]) => void;
}

const MultipleChoiceQuestion: FC<MultipleChoiceQuestionProps> = props => {
	const { question, handleAnswerChange } = props;
	const { answers } = useAppSelector((state: RootState) => state.test);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const option = e.target.value;
		const currentAnswer = (answers[question.id] as string[]) || [];
		const newAnswer = currentAnswer.includes(option)
			? currentAnswer.filter(a => a !== option)
			: [...currentAnswer, option];
		handleAnswerChange(newAnswer);
	};

	return (
		<div>
			<p>{question.question}</p>
			{question.options?.map((option: any, index: number) => (
				<label key={index}>
					<input
						type='checkbox'
						name={`question-${question.id}`}
						value={option}
						onChange={handleChange}
						checked={(answers[question.id] || []).includes(option)}
					/>
					{option}
				</label>
			))}
		</div>
	);
};

export default MultipleChoiceQuestion;
