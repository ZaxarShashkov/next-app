import { Menu } from '@/app/components/Menu/Menu';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
	return (
		<div {...props}>
			<Menu />
		</div>
	);
};

export default Sidebar;
