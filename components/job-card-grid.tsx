import JobCard from "@/components/job-card"

interface Job {
  id: string
  title: string
  company: string
  location: string
  salary: string
  tags: string[]
  logo: string
}

interface JobCardGridProps {
  jobs: Job[]
}

export default function JobCardGrid({ jobs }: JobCardGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          salary={job.salary}
          tags={job.tags}
          logo={job.logo}
        />
      ))}
    </div>
  )
}
