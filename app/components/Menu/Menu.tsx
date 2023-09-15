import React from 'react';
import { getMenu } from '../../../api/menu';
import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import styles from './Menu.module.scss';
import cn from 'classnames';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: 'courses',
		name: 'Курсы',
		id: TopLevelCategory.Courses,
	},
	{
		route: 'books',
		name: 'Книги',
		id: TopLevelCategory.Books,
	},
	{
		route: 'products',
		name: 'Продукты',
		id: TopLevelCategory.Products,
	},
	{
		route: 'services',
		name: 'Сервисы',
		id: TopLevelCategory.Services,
	},
];

export async function Menu() {
	const menu = await getMenu(0);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map((menu) => {
					<div key={menu.route}>
						<a href={`/${menu.route}`}>
							<div
								className={cn(styles.firstLevel, {
									// [styles.firstLevelActive]: menu.id === 
								})}>
								<span>{menu.name}</span>
							</div>
						</a>
					</div>;
				})}
			</>
		);
	};

	const buildSecondLevel = () => {};

	const buildThirdLevel = () => {};

	return (
		<div className={styles.menu}>
			{buildFirstLevel()}
			<ul>
				{menu.map((m) => {
					return <li>{m._id.secondCategory}</li>;
				})}
			</ul>
		</div>
	);
}
