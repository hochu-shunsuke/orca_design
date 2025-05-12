interface AboutHistoryItemProps {
  year: string
  title: string
  description: string
  isLeft: boolean
}

export default function AboutHistoryItem({ year, title, description, isLeft }: AboutHistoryItemProps) {
  return (
    <div className={`flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
      <div className={`w-5/12 ${!isLeft && "text-right"}`}>
        <div className="bg-brand-orange text-white inline-block px-3 py-1 rounded-full text-sm font-bold mb-2">
          {year}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="w-2/12 flex justify-center">
        <div className="w-5 h-5 bg-brand-orange rounded-full z-10"></div>
      </div>

      <div className="w-5/12"></div>
    </div>
  )
}
