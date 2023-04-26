import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Head from 'next/head'
import DataCards from '@/components/DataCards'
import BarChart from '@/components/BarChart'
import AdminList from '@/components/AdminList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Genie Admin Dashboard</title>
        <meta name="description" content="Created by Team Blueblood" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="min-h-screen">
        <Header />
        <DataCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <AdminList />
        </div>
      </main>
    </>
  )
}
