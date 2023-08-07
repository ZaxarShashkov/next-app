'use client';

import React, {
	DetailedHTMLProps,
	HTMLAttributes,
	useState,
	useEffect,
	KeyboardEvent,
} from 'react';
import styles from './Rating.module.scss';
import cn from 'classnames';

interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isEditable?: boolean;
}

const Rating = ({ isEditable = false, ...props }: RatingProps): JSX.Element => {
	const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));
	const [rating, setRating] = useState<number>(4);

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArr = ratingArr.map((item: JSX.Element, i: number) => {
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='none'
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClick(i + 1)}
					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(e: KeyboardEvent<SVGElement>) =>
						isEditable && handleSpace(e, i + 1)
					}>
					<path
						className={cn(styles.star, {
							[styles.filled]: i < currentRating,
							[styles.editable]: isEditable,
						})}
						d='M19.9477 7.55686C19.816 7.13427 19.4568 6.83508 19.0335 6.79511L13.2601 6.24816L10.9784 0.673859C10.81 0.264321 10.4267 0 10 0C9.57337 0 9.18991 0.264321 9.02252 0.673859L6.74084 6.24816L0.966519 6.79511C0.543233 6.83587 0.184799 7.13507 0.0523506 7.55686C-0.0793348 7.97946 0.0422796 8.44298 0.362414 8.73596L4.72665 12.7293L3.43985 18.6434C3.34571 19.0782 3.50745 19.5279 3.85322 19.7887C4.03908 19.9296 4.25743 20 4.47655 20C4.66485 20 4.8533 19.9478 5.0216 19.8427L10 16.7364L14.9775 19.8427C15.3427 20.0704 15.8018 20.0495 16.1468 19.7887C16.4926 19.5279 16.6543 19.0782 16.5602 18.6434L15.2734 12.7293L19.6376 8.73596C19.9576 8.44298 20.0794 7.98041 19.9477 7.55686Z'
						fill='none'
					/>
				</svg>
			);
		});
		setRatingArr(updatedArr);
	};

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	const onClick = (i: number) => {
		if (!isEditable || !setRating) {
			return;
		} else {
			setRating(i);
		}
	};

	const handleSpace = (e: KeyboardEvent<SVGElement>, i: number) => {
		if (e.code != 'Space' || !setRating) {
			return;
		}
		setRating(i);
	};

	return (
		<div {...props}>
			{ratingArr.map((item, i) => {
				return <span key={i}>{item}</span>;
			})}
		</div>
	);
};

export default Rating;
