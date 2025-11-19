import Nav from "@/components/navigation/Nav";
import style from "./layout.module.css"

import ScrollProgressBar from "./ScrollProgressBar";
import FloatingActionButton from "@/components/FAB/FloatingActionButton";


export default function RootLayout({children}){
    return <>
    <Nav/>
    <ScrollProgressBar/>
    {children}
    <FloatingActionButton/>
    </>
}