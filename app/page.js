'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  console.log(searchParams);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

     <h1>Home Page</h1>
     <div >
        <ul className='flex flex-row gap-3'>
          <li><Link href="/dashboard#red">Red Part</Link></li>
          <li><Link href="/dashboard#blue">Blue Part</Link></li>
          <li><Link href="/dashboard#green">Green Part</Link></li>
        </ul>
     </div>




    </main>
  )
}
