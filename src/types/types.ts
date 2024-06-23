export enum QuestionType {
	SINGLE = 'single',
	MULTIPLE = 'multiple',
	SHORT = 'short',
	LONG = 'long',
}

export interface Question {
	id: number;
	type: QuestionType;
	question: string;
	options?: string[];
}

export interface SingleChoiceQuestionType extends Question {
	type: QuestionType.SINGLE;
	options: string[];
}

export interface MultipleChoiceQuestionType extends Question {
	type: QuestionType.MULTIPLE;
	options: string[];
}

export interface ShortAnswerQuestionType extends Question {
	type: QuestionType.SHORT;
}

export interface LongAnswerQuestionType extends Question {
	type: QuestionType.LONG;
}
