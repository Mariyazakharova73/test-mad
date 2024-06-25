import { Formik, FormikHelpers } from 'formik';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../../components/Question/Question';
import { useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../store/store';
import { FormValues } from '../../types/types';
import { TEST_DATA_LS } from '../../utils/constants';
import { formSchema } from '../../utils/formSchema';
import s from './Form.module.css';

export interface FormProps {
	isTimeUp: boolean;
	handleTimeUp: () => void;
}

const Form: FC<FormProps> = props => {
	const { isTimeUp, handleTimeUp } = props;
	const navigate = useNavigate();

	const savedState = localStorage.getItem(TEST_DATA_LS);
	const savedAnswers = savedState ? JSON.parse(savedState).answers : null;

	const [initialValues, setInitialValues] = useState<FormValues>(
		savedAnswers || {}
	);

	const { questions, currentQuestionIndex } = useAppSelector(
		(state: RootState) => state.test
	);
	const isTestCompleted = currentQuestionIndex === questions.length;

	const handleSubmit = (
		values: FormValues,
		actions: FormikHelpers<FormValues>
	) => {
		console.log(values);
		actions.setSubmitting(false);
		actions.resetForm();
	};

	return (
		<>
			{!isTestCompleted && (
				<div className={s.container}>
					<h2 className={s.questionTitle}>
						{questions[currentQuestionIndex].question}
					</h2>
					<Formik
						initialValues={initialValues}
						onSubmit={handleSubmit}
						validationSchema={formSchema}
						validateOnChange={false}
						validateOnBlur={true}
					>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleSubmit,
							isSubmitting,
							isValid,
							handleBlur,
							dirty,
							setTouched,
						}) => (
							<form className={s.form} onSubmit={handleSubmit}>
								<Question
									question={questions[currentQuestionIndex]}
									errors={errors}
									touched={touched}
									handleChange={handleChange}
									values={values}
									handleBlur={handleBlur}
								/>
							</form>
						)}
					</Formik>
				</div>
			)}
		</>
	);
};

export default Form;
