import { kabupaten } from "daftar-wilayah-indonesia"
import ContentKabupaten from "@/components/kabupaten"

export default function KabupatenData({ params }) {
  const kab = kabupaten()
  const filtered = kab.filter((item) => item.kode_provinsi === params.data)
  return (
    <main>
      <div className="bg-gray-100">
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          {filtered.map((data, i) => (
            <ContentKabupaten
              nama={data.nama}
              kode={data.kode}
              index={i}
              kode_provinsi={params.data}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
