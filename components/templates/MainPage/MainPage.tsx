/* eslint-disable @next/next/no-img-element */
'use client'
import About from '@/components/modules/MainPage/About/About'
import Contacts from '@/components/modules/MainPage/Contacts/Contacts'
import Experience from '@/components/modules/MainPage/Experience/Experience'
import Hero from '@/components/modules/MainPage/Hero/Hero'
import Projects from '@/components/modules/MainPage/Projects/Projects'
import Skills from '@/components/modules/MainPage/Skills/Skills'

const MainPage = () => (
  <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contacts />
  </main>
)

export default MainPage
