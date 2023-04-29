import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactForm from '../components/ContactForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <Head>
      <title>Sebastian | Full-Stack Developer</title>
    </Head>
    <Main/>
    <About/>
    <Skills/>
    <Projects/>
    <ContactForm/>
    </div>
  )
}
