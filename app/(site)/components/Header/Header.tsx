import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Header = ({ ...props }: HeaderProps): JSX.Element => {
	return <div {...props}>Header</div>;
};

export default Header;
