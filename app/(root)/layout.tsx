import { ReactNode } from 'react'
import Navbar from '@/components/ui/Navbar'
const RootLayout = async({ children }: { children: ReactNode }) => {
    return (
        <div className="flex mx-auto max-w-7xl flex-col my-12 px-16 max-sm:px-4 max-sm:my-8">
            <Navbar />
            {children}
        </div>
    )
}

export default RootLayout