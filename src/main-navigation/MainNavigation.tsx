import Footer from '../shared/components/footer/Footer'
import Header from '../shared/components/header/Header'
import { Outlet } from 'react-router'

const MainNavigation = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainNavigation
