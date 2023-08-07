import React from 'react';
import { getMenu } from '../../../api/menu';

export async function Menu() {
	const menu = await getMenu(0);

	return (
		<div>
			{menu.map((m) => {
				return <li>{m._id.secondCategory}</li>;
			})}
		</div>
	);
}
