import ContentProvinsi from "@/components/provinsi"
import { provinsi } from "daftar-wilayah-indonesia"

export default function About() {
  const prov = provinsi()
  return (
    <main>
      <div className="bg-gray-100">
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          {prov.map((data, i) => (
            <ContentProvinsi nama={data.nama} kode={data.kode} index={i} />
          ))}
        </div>
      </div>
    </main>
  )
}
