import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
      <div className="mx-auto w-full max-w-7xl">
        <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
          <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
              <h2 className="text-3xl font-bold sm:text-5xl">
                Download the App Now
              </h2>
              <Link
                className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                to="/"
              >
                <svg
                  fill="white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                &nbsp; Download now
              </Link>
            </div>
          </div>

          <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
            <img
              className="w-96"
              src="https://c.ndtvimg.com/2026-03/nc15h1t4_csk-2026-team-x_625x300_24_March_26.jpeg"
              alt="image1"
            />
          </div>
        </aside>

        <div className="grid  place-items-center sm:mt-20">
          <img
            className="sm:w-96 w-48"
            src="https://static.wixstatic.com/media/c41a82_61205da70863424898be7de483dd8424~mv2.png/v1/fill/w_662,h_442,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c41a82_61205da70863424898be7de483dd8424~mv2.png"
            alt="image2"
          />
        </div>

        <div className="flex justify-center">
          <h1 className="inline-block bg-black text-yellow-400 text-6xl mt-4 mb-2 px-3 py-4 font-serif">
            Chennai Super Kings
          </h1>
        </div>
      </div>
    );
}
