import React from 'react'
import Link from 'next/link'

function ReviewsSection() {
  return (
    <section className='section flex-col  items-center  overflow-hidden '>
        <div className="section-inner space-y-5">
            <h3 className="type-title-lg text-center">
                    SI REPITEN, ES<br/>POR ALGO 
            </h3>
            <div className=" w-[60vh] h-40 bg-fondo-500 my-5" >

            </div>
            <Link href="/" className="border-7 border-logo-100 px-8 py-4 type-cta mb-10">
                Reservar
            </Link>
                <svg width="700" height="24" viewBox="0 0 700 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="
                        M 8 12
                        L 26 10.7
                        L 194 10.7
                        L 212 12
                        L 194 13.3
                        L 26 13.3
                        Z
                    " fill="#F3F3F3"/>
                </svg>
        </div>
    </section>
  )
}

export default ReviewsSection