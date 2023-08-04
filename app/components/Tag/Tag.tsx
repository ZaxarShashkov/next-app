import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from './Tag.module.scss';
import cn from 'classnames';

interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 'small' | 'regular';
	children: ReactNode;
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
}

const Tag = ({
	size = 'regular',
	children,
	color = 'ghost',
	href,
	...props
}: TagProps): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, {
				[styles.tag__small]: size === 'small',
				[styles.tag__regular]: size === 'regular',
				[styles.ghost]: color === 'ghost',
				[styles.red]: color === 'red',
				[styles.grey]: color === 'grey',
				[styles.green]: color === 'green',
				[styles.primary]: color === 'primary',
			})}
			{...props}>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};

export default Tag;
