import Image from "next/image"

interface AboutFeatureCardProps {
  title: string
  description: string
  image: string
  reverse?: boolean
}

export default function AboutFeatureCard({ title, description, image, reverse = false }: AboutFeatureCardProps) {
  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}>
      <div className="md:w-1/2">
        <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02]">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
      </div>
      <div className="md:w-1/2">
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <div className="w-20 h-1 bg-brand-orange mb-6"></div>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
