import React from 'react'

import { SEODefaults } from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/global.scss'

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <SEODefaults />
      <main>{children}</main>
      <Footer />
    </>
  )
}

interface Props {
  children: React.ReactChildren | string
}

export default Layout
