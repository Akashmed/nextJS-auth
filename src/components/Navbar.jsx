"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const session = useSession();
    console.log(session)
    const links = [
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Dashboard",
            path: "/dashboard"
        },
    ]

    const handler = () => {
        router.push('/api/auth/signin')
    }
    return (
        <nav className="bg-red-500 px-6 py-5 flex justify-between items-center">
            <h6 className="text-3xl">Next <span className="text-cyan-300">Hero</span></h6>
            <ul className="flex justify-between items-center space-x-4">
                {links.map(link => <Link className={`${pathName === link.path && 'text-white'}`} key={link.path} href={`${link.path}`}>{link.title}</Link>)}
            </ul>
            <div className="flex items-center gap-3">
                <div>
                    {!session?.data ? <button onClick={handler}>Login</button> : <button onClick={signOut} className="bg-yellow-500 rounded-lg text-amber-900 p-3">Logout</button>}
                    <Link className="ml-3" href='/api/auth/signup'>Sign Up</Link>
                </div>

                <div className="flex flex-col items-start justify-center">
                    <p>{session?.data?.user?.name}</p>
                    <p>{session?.data?.user?.type}</p>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;