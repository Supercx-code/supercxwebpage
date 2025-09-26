import React from 'react'
import CloudyHeading from '../components/CloudyHeading'

const TrustedBy = () => {
    return (
        <div className="mt-20 min-w-full">
            <CloudyHeading>
                Trusted By
            </CloudyHeading>

            <div className="flex justify-center px-4 mt-10">
                <img
                    src="/trustedcompanies.png"
                    alt="Trusted By Companies"
                    className="w-full rounded-2xl shadow-lg border border-white/10 pointer-events-none select-none"
                />
            </div>
        </div >
    )
}

export default TrustedBy