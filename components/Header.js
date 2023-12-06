'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Header(){
	const pathname = usePathname();
    const router = useRouter();
	return (
		<header>
			<ul className='flex justify-center gap-2'>
				<li>
					<span
                        onClick={() => router.push('/')}
						className={`hover:underline link ${
							pathname === '/' ? 'active border-b-2 border-white' : ''
						}`}
						href='/'
					>
                        Home

					</span>
				</li>
				<li

				>
					<span
                        onClick={() => router.push('/dashboard')}
                        className={`hover:underline link ${
                        pathname === '/dashboard' ? 'active border-b-2 border-white' : ''
                        }`}
                        href='/dashboard'
                    >
                Dashboard
                    </span>
				</li>
				<li

				>
					<span
                        onClick={() => router.push('/blog')}
                        className={`hover:underline link  ${
						pathname === '/blog' ? 'active border-b-2 border-white': ''
					}`} href='/blog'>
                        Blog
                    </span>
				</li>
				<li

				>
					<span
                        onClick={() => router.push('/dashboard/settings')}
                        className={`hover:underline link  ${
						pathname === '/dashboard/settings' ? 'active border-b-2 border-white': ''
					}`} href='/dashboard/settings'>
                        Settings
                    </span>
				</li>
			</ul>
			<div className='text-center'>
				<button
					onClick={() => router.back()}
					className='bg-blue-500 w-20 h-10 rounded-sm mr-4 mt-10 '
				>
					Back
				</button>
				<button
					onClick={() => router.forward()}
					className='bg-blue-500 w-20 h-10 rounded-sm mr-4 mt-10'
				>
					Forward
				</button>
			</div>

		</header>
	);
};


