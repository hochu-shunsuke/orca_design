import { Badge } from "@/components/ui/badge"

interface GraduationYearBadgeProps {
  year: string
}

export default function GraduationYearBadge({ year }: GraduationYearBadgeProps) {
  // 卒業年度に応じて色を変える
  const getColorClass = (year: string) => {
    switch (year) {
      case "27卒":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "28卒":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "29卒":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  return (
    <Badge variant="outline" className={`rounded-full font-medium ${getColorClass(year)}`}>
      {year}
    </Badge>
  )
}
