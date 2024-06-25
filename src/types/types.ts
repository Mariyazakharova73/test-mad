export enum QuestionVariant {
	SINGLE = 'single',
	MULTIPLE = 'multiple',
	SHORT = 'short',
	LONG = 'long',
}

export interface Question {
	id: number;
	type: QuestionVariant;
	question: string;
	options?: string[];
	fieldName: keyof FormValues;
	validateMessage?: string;
}

export interface SingleChoiceQuestionType extends Question {
	type: QuestionVariant.SINGLE;
	options: string[];
}

export interface MultipleChoiceQuestionType extends Question {
	type: QuestionVariant.MULTIPLE;
	options: string[];
}

export interface ShortAnswerQuestionType extends Question {
	type: QuestionVariant.SHORT;
}

export interface LongAnswerQuestionType extends Question {
	type: QuestionVariant.LONG;
}

export interface FormValues {
	username: string;
	color: string;
	season: string;
	checkboxGroup: string[];
	experience: string;
}
