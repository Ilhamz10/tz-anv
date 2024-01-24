/* eslint-disable react/prop-types */
import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(function Input({ id, label, ...props }, ref) {
	return (
		<div className={styles.inputContainer}>
			<label htmlFor={id}>{label}</label>
			<input ref={ref} {...props} id={id} />
		</div>
	);
});

export default Input;
