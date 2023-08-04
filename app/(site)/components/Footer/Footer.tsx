import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Footer = ({ ...props }: FooterProps) => {
	return <div {...props}>Footer</div>;
};

export default Footer;
