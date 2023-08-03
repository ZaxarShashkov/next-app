import React, { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

interface ButtonProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode;
	appearance: 'primary' | 'ghost';
}

const Button = ({ children, appearance, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
			})}
			type='button'
			{...props}>
			{children}
		</button>
	);
};

export default Button;
