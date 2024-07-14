import { createRootRoute, Outlet, ScrollRestoration } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'

export const Route = createRootRoute({
    component: () => <Layout />,
})

function Layout() {
    return (
        <main className='min-h-[100dvh] font-poppins'>
            <ScrollRestoration />
            <Navbar />
            <Outlet />
            <Footer />
            {/* <TanStackRouterDevtools /> */}
        </main>
    )
}
