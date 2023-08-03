import React, { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './Paragraph.module.scss';
import cn from 'classnames';

interface ParagraphProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	children: ReactNode;
	size?: 'small' | 'regular' | 'large';
}

const Paragraph = ({ children, size = 'regular', ...props }: ParagraphProps) => {
	return (
		<p
			className={cn(styles.paragraph, {
				[styles.paragraph__small]: size === 'small',
				[styles.paragraph__large]: size === 'large',
			})}
			{...props}>
			{children}
		</p>
	);
};

export default Paragraph;
