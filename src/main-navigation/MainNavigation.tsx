import Header from '../shared/components/header/Header'
import { Outlet } from 'react-router'

const MainNavigation = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default MainNavigation
