import Image from "next/image"

interface ServiceHeroProps {
  title: string
  subtitle: string
}

export default function ServiceHero({ title, subtitle }: ServiceHeroProps) {
  return (
    <div className="relative h-[300px] w-full">
      <Image src="/placeholder.svg?height=600&width=1200" alt={title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
        <p className="text-xl">{subtitle}</p>
      </div>
      <div className="absolute bottom-0 left-0 bg-brand-orange text-white px-4 py-2 flex items-center">
        <span className="mr-2">ホーム</span>
        <span className="mx-2">&gt;</span>
        <span>{subtitle}</span>
      </div>
    </div>
  )
}
