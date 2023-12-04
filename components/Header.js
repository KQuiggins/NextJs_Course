'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
	const pathname = usePathname();

	return (
		<header>
			<ul className='flex justify-center gap-2'>
				<li>
					<Link
						className={`hover:underline link ${
							pathname === '/' ? 'active border-b-2 border-white' : ''
						}`}
						href='/'
					>
						Home
					</Link>
				</li>
				<li
					className={`hover:underline link 
          ${pathname === '/dashboard' ? 'active border-b-2 border-white' : ''}`}
				>
					<Link href='/dashboard'>Dashboard</Link>
				</li>
				<li
					className={`hover:underline link  ${
						pathname === '/blog'
							? 'active border-b-2 border-white'
							: ''
					}`}
				>
					<Link href='/blog'>Blog</Link>
				</li>
				<li
					className={`hover:underline link  ${
						pathname === '/dashboard/settings'
							? 'active border-b-2 border-white'
							: ''
					}`}
				>
					<Link href='/dashboard/settings'>Settings</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
