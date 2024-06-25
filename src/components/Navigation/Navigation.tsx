import { Button, Flex } from 'antd';
import React from 'react';

interface NavigationProps {
	onNext: () => void;
	onPrevious: () => void;
	isTestCompleted: boolean;
	currentQuestionIndex: number;
	finishTest: () => void;
}

const Navigation: React.FC<NavigationProps> = props => {
	const {
		onNext,
		onPrevious,
		isTestCompleted,
		currentQuestionIndex,
		finishTest,
	} = props;
	return (
		<Flex gap='small' justify='space-between'>
			<Flex gap='small'>
				<Button
					type='primary'
					onClick={onPrevious}
					disabled={currentQuestionIndex === 0}
				>
					Назад
				</Button>
				<Button type='primary' onClick={onNext} disabled={isTestCompleted}>
					Вперед
				</Button>
			</Flex>
			<Button type='primary' onClick={finishTest}>
				Завершить тестирование
			</Button>
		</Flex>
	);
};

export default Navigation;
