import Footer from '@c/footer'
import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <>
            <main className="flex flex-col min-h-screen items-center justify-center pb-52">
                <Link href='/'>
                    <h1 className="text-primary text-3xl font-semibold cursor-pointer">Sensores App</h1>
                </Link>
                {children}
                <Footer />
            </main>
        </>
    );
}
