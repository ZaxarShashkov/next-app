import { getPage } from '@/api/page';
import { getMenu } from '@/api/menu';
import React from 'react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
	const menu = await getMenu(0);
	return menu.flatMap((item) => item.pages.map((page) => ({ alias: page.alias })));
}

export default async function PageProducts({ params }: { params: { alias: string } }) {
	const page = await getPage(params.alias);
	console.log(page);
	if (!page) {
		notFound();
	}
	return (
		<div className='div'>
			<div className='div'>{page.alias}</div>
			<div className='div'>{page.category}</div>
			<div>{page.title} </div>
			<div>{page._id} </div>
		</div>
	);
}
