import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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
