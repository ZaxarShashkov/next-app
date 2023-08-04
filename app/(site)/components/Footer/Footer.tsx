import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Footer.module.scss';
import cn from 'classnames';
import Paragraph from '@/app/components/Paragraph/Paragraph';

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Footer = ({ className, ...props }: FooterProps) => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<Paragraph size='regular' className={styles.footer__text}>
				OwlTop © 2022 - 2023 Все права защищены
			</Paragraph>
			<Paragraph size='regular'>Пользовательское соглашение</Paragraph>
			<Paragraph size='regular'>Политика конфиденциальности</Paragraph>
		</footer>
	);
};

export default Footer;
