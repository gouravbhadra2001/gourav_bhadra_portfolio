"use client"

import Link from "next/link"
import styles from "./nav.module.css"
import { usePathname } from "next/navigation"
import { useRef } from "react"
const navLinks = [
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {name: "Projects", path: "/projects"},
    {name: "Contact", path: "/contact"},
    {name: "Blogs", path:"/blogs"}

]

const Nav = () =>{

    const pathName = usePathname()
    const dialogRef = useRef(null)

    const isActive = (path)=>{
        return path==="/"? pathName==="/" : pathName.startsWith(path)
    }

    const openDialog = () => {
    dialogRef.current?.showModal();
  };

  
    return <header className={styles.menubar}>
        <div>Gourav Bhadra</div>
        <nav className={styles.nav}>
            <ul>
                {
                    navLinks.map((navLink, index)=><li className={`${isActive(navLink.path)?styles.active_link:""}`} style={{listStyle: "none"}} key={index}>
                        <Link href={navLink.path}>
                            {navLink.name}
                        </Link>
                    </li>)
                }
            </ul>
        </nav>
        <dialog className={styles.appdrawer} ref={dialogRef}>
            <form method="dialog">
                <button className={styles.close_dialog}>&#10006;</button>
                <ul>
                {
                    navLinks.map((navLink, index)=><li className={`${isActive(navLink.path)?styles.active_link:""}`} style={{listStyle: "none"}} key={index}>
                        <Link href={navLink.path}>
                            {navLink.name}
                        </Link>
                    </li>)
                }
            </ul>
                </form>
            </dialog>
        <span className={styles.hamburger_base} onClick={openDialog}></span>
    </header>
}

export default Nav