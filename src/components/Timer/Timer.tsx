import React, { useEffect, useState } from 'react';
import s from './Timer.module.css';

interface TimerProps {
	initialTime: number; // Время в секундах
	onTimeUp: () => void; // Функция, вызываемая при истечении времени
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTimeUp }) => {
	const [time, setTime] = useState(() => {
		const savedTime = localStorage.getItem('remainingTime');
		return savedTime ? Number(savedTime) : initialTime;
	});

	useEffect(() => {
		if (time === 0) {
			onTimeUp();
			localStorage.removeItem('remainingTime');
			return;
		}

		const timerId = setInterval(() => {
			setTime(prevTime => {
				const newTime = prevTime - 1;
				localStorage.setItem('remainingTime', newTime.toString());
				return newTime;
			});
		}, 1000);

		return () => clearInterval(timerId);
	}, [time, onTimeUp]);

	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
	};

	return <div className={s.timer}>{formatTime(time)}</div>;
};

export default Timer;
