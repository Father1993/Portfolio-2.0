'use client'
import Footer from '../modules/Footer/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    {children}
    <Footer />
  </>
)

export default Layout
