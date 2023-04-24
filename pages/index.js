import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <Head>
      <title>Sebastian | Full-Stack Developer</title>
    </Head>
    <Navbar/>
    <Main/>
    <About/>
    <Skills/>
    </div>
  )
}
