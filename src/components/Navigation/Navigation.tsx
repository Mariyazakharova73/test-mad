import React from 'react';

interface NavigationProps {
	onNext: () => void;
	onPrevious: () => void;
	isTestCompleted: boolean;
	currentQuestionIndex: number;
}

const Navigation: React.FC<NavigationProps> = props => {
	const { onNext, onPrevious, isTestCompleted, currentQuestionIndex } = props;
	return (
		<div>
			<button onClick={onPrevious} disabled={currentQuestionIndex === 0}>
				Previous
			</button>
			<button onClick={onNext} disabled={isTestCompleted}>
				Next
			</button>
		</div>
	);
};

export default Navigation;
