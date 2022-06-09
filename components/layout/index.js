import Footer from '@c/footer'
import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <>
            <main className="flex flex-col min-h-screen items-center pt-4">
                <Link href='/'>
                    <h1 className="text-primary text-3xl font-semibold cursor-pointer">Sensores App</h1>
                </Link>
                <div className='flex items-center justify-center w-full h-[calc(100vh-118px)]'>
                    {children}
                </div>
                <Footer />
            </main>
        </>
    );
}
