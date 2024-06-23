import { Progress } from 'antd';
import { FC, useEffect, useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Question from '../../components/Question/Question';
import Timer from '../../components/Timer/Timer';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../store/store';
import {
	loadQuiz,
	nextQuestion,
	previousQuestion,
} from '../../store/testSlice';
import { DATA, INITIAL_TIME } from '../../utils/constants';
import s from './TestPage.module.css';

const TestPage: FC = () => {
	const [isTimeUp, setIsTimeUp] = useState(false);
	const { questions, currentQuestionIndex } = useAppSelector(
		(state: RootState) => state.test
	);

	const isTestCompleted = currentQuestionIndex === questions.length;

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (questions.length === 0) {
			// Замоканный вызов загрузки вопросов
			dispatch(loadQuiz(DATA));
		}
	}, [dispatch, questions.length]);

	const handleNext = () => {
		dispatch(nextQuestion());
	};

	const handlePrev = () => {
		dispatch(previousQuestion());
	};

	const handleTimeUp = () => {
		setIsTimeUp(true);
		// Здесь можно выполнить дополнительные действия, например, автоматически отправить тест
	};

	return (
		<>
			{!isTimeUp ? (
				<>
					<div className={s.title}>
						<h1>Тестирование</h1>
						<Timer initialTime={INITIAL_TIME} onTimeUp={handleTimeUp} />
					</div>
					<Progress
						percent={(currentQuestionIndex / questions.length) * 100}
						steps={questions.length}
						size={{ width: 40, height: 10 }}
						// strokeColor={[green[6], green[6], red[5]]}
					/>
					{!isTestCompleted && (
						<Question question={questions[currentQuestionIndex]} />
					)}
					<Navigation onNext={handleNext} onPrevious={handlePrev} isTestCompleted={isTestCompleted} currentQuestionIndex={currentQuestionIndex}/>
				</>
			) : (
				<h1>Тестирование завершено! Время вышло</h1>
			)}
		</>
	);
};

export default TestPage;
