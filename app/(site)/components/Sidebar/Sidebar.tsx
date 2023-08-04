import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
	return <div {...props}>Sidebar</div>;
};

export default Sidebar;
