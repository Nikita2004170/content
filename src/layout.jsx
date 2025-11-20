import react from 'react'
import { Outlet } from 'react-router-dom'
import Header from './component/header.jsx'
import Footer from './component/footer.jsx'
export const Layout = () => {
    return (
        <div className='bg-black'>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    )
}