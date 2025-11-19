"use client"


import Link from 'next/link'

const ResumeCTA = () => {

    return (
        <Link href="/Assets/GOURAV_GENERAL_RESUME_V2.pdf" about='_blank'>
        <div
        >
            <img
                width="40"
                height="40"
                src="/Assets/icons8-download-resume-80.png"
            />
            <br />
            <p>Download Resume</p>
        </div>
        </Link>
    )
}

export default ResumeCTA