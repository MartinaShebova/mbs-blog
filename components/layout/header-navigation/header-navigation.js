import headerNavigationStyles from './header-navigation.module.scss';
import Link from 'next/link';

export default function HeaderNavigation() {
	return (
		<nav className={headerNavigationStyles.headerNavigationWrapper}>
			<ul>
				<li>
					<Link href='/'>Начало</Link>
				</li>
				<li>
					<Link href='/trips'>Пътувания</Link>
				</li>
				<li>
					<Link href='/trips'>Джаджи</Link>
				</li>
				<li>
					<Link href='/trips'>Пишете ми!</Link>
				</li>
				<li>
					<Link href='/trips'>За мен</Link>
				</li>
				<li>
					<Link href='/trips'>Блогът - технологии</Link>
				</li>
			</ul>
		</nav>
	)
}
