import { getPage } from '@/app/api/page';
import { getMenu } from '@/app/api/menu';
import React from 'react';
import { notFound } from 'next/navigation';

type Props = {};

export async function generateStaticParams() {
	const menu = await getMenu(0);
	return menu.flatMap((item) => item.pages.map((page: any) => ({ alias: page.alias })));
}

export default async function PageProducts({ params }: { params: { alias: string } }) {
	const page = await getPage(params.alias);
	if (!page) {
		notFound();
	}
	return (
		<div className='div'>
			<div>{page.title} asdsa</div>
		</div>
	);
}
