import Link from "next/link"

export default function ContentProvinsi({ nama, kode, index }) {
  return (
    <div className="relative" key={index}>
      <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
        <div className="p-5">
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-8 h-8 text-purple-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <Link href={`/provinsi/${kode}`}>
            <p className="mb-2 font-bold text-black">{nama}</p>
          </Link>
          <p className="mb-2 -mt-2.5 text-sm text-black">kode = {kode}</p>
          <p className="text-sm leading-5 text-gray-900">
            Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
        <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
      </div>
    </div>
  )
}
