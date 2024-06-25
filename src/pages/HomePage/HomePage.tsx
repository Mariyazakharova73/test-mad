import { Button, Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../assets/bg.jpg';
import { Routes } from '../../config/routes';
import s from './HomePage.module.css';

const HomePage: React.FC = () => {
	return (
		<Card
			className={s.card}
			cover={<img alt='Школьная парта с книгой.' src={Image} />}
		>
			<h1 className={s.title}>Проверьте свои знания</h1>
			<div className={s.text}>
				<p>5 вопросов, 10 минут на прохождение</p>
			</div>
			<div className={s.buttonWrapper}>
				<Button type='primary' size='large'>
					<Link to={Routes.TEST}>Начать тест</Link>
				</Button>
			</div>
		</Card>
	);
};

export default HomePage;
