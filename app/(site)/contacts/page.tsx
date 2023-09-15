import { API } from '@/api/_api';
import { getMenu } from '@/api/menu';
import { MenuItem } from '@/interfaces/menu.interface';
import axios from 'axios';
import React from 'react';

type Props = {};

const page = async (props: Props) => {
	const menu = await getMenu(0);

	return (
		<div>
			<div className='div'>{menu.length}</div>
		</div>
	);
};

export default page;
