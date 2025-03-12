'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
    const pathname = usePathname();
    const links = [
        { name: "Find Jobs", url: "/find-jobs" },
        { name: "Find Talent", url: "/find-talent" },
        { name: "Post Job", url: "/post-job" },
        { name: "Posted Job", url: "/posted-job" },
        { name: "Job History", url: "/job-history"},
        { name: "SignUp", url: "/signup"}
    ];

    return (
        <nav className="flex gap-5 text-mine-shaft-300 h-full items-center">
            {links.map((link) => {
                const isActive = pathname === link.url;
                return (
                    <Link 
                        key={link.name}
                        href={link.url}
                        className={`${ isActive ? " border-bright-sun-400 text-bright-sun-400" : "border-transparent"} border-t-[3px] h-full flex items-center`}>
                    
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default NavLinks;