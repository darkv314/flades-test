import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Navbar from '../components/shared/Navbar'

export const Route = createRootRoute({
    component: () => (
        <main className='min-h-[100dvh] font-poppins'>
            <Navbar />
            <Outlet />
            <TanStackRouterDevtools />
        </main>
    ),
})
