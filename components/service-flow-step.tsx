interface ServiceFlowStepProps {
  number: number
  title: string
  description: string
  isLast?: boolean
}

export default function ServiceFlowStep({ number, title, description, isLast = false }: ServiceFlowStepProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-amber-400 text-white rounded-full py-3 px-6 font-bold text-center w-full">{title}</div>
      <p className="text-sm text-center mt-2 mb-4">{description}</p>
      {!isLast && <div className="h-6 w-0.5 bg-amber-400"></div>}
    </div>
  )
}
