import { Button, Flex, Progress } from 'antd';
import { FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../../components/Form/Form';
import Navigation from '../../components/Navigation/Navigation';
import Timer from '../../components/Timer/Timer';
import { Routes } from '../../config/routes';
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
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { questions, currentQuestionIndex } = useAppSelector(
		(state: RootState) => state.test
	);
	const isTestCompleted = currentQuestionIndex === questions.length;

	useEffect(() => {
		if (questions.length === 0) {
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
		localStorage.clear();
	};

	const handleRefresh = () => {
		window.location.reload();
	};

	const finishTest = () => {
		handleTimeUp();
		// отправляем заполненные данные на сервер
	};

	return (
		<>
			{!isTimeUp ? (
				<>
					<div className={s.title}>
						<h1>Тестирование</h1>
						<Timer initialTime={INITIAL_TIME} onTimeUp={handleTimeUp} />
					</div>
					<div className={s.container}>
						<Progress
							percent={(currentQuestionIndex / questions.length) * 100}
							steps={questions.length}
							size={{ width: 40, height: 10 }}
						/>
					</div>
					<Form isTimeUp={isTimeUp} handleTimeUp={handleTimeUp} />
					<Navigation
						onNext={handleNext}
						onPrevious={handlePrev}
						isTestCompleted={isTestCompleted}
						currentQuestionIndex={currentQuestionIndex}
						finishTest={finishTest}
					/>
				</>
			) : (
				<Flex vertical gap='small'>
					<h1>Тестирование завершено! Время вышло.</h1>
					<Flex gap='small'>
						<Button type='primary' size='large' onClick={handleRefresh}>
							Пройти тест снова
						</Button>
						<Button type='primary' size='large'>
							<Link to={Routes.HOME}>На главную</Link>
						</Button>
					</Flex>
				</Flex>
			)}
		</>
	);
};

export default TestPage;
