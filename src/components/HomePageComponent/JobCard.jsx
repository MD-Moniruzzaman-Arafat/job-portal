import { formatDistanceToNow } from 'date-fns';
import { formatNumber } from '../../utils';
import JobCardError from './JobCardError';
import JobCardLoader from './JobCardLoader';

export default function JobCard({ data, isLoading, isError }) {
  if (isLoading) {
    return <JobCardLoader />;
  }
  if (isError) {
    return <JobCardError />;
  }
  return (
    <>
      {data?.data.map((job) => {
        return (
          <article
            key={job.id}
            class="card p-6 hover:shadow-md transition-shadow"
          >
            <div class="flex flex-col md:flex-row gap-4">
              {/* <!-- Company Logo --> */}
              <div class="shrink-0">
                <div class="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
                  <i data-lucide="building-2" class="h-8 w-8 text-primary"></i>
                </div>
              </div>

              {/* <!-- Job Details --> */}
              <div class="flex-1 space-y-3">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <h3 class="text-lg font-semibold mb-1">
                      <a
                        href="job-seeker/job-details.html"
                        class="hover:underline"
                      >
                        {job.title}
                      </a>
                    </h3>
                    <div class="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <a
                        href="company-profile.html"
                        class="hover:text-primary font-medium"
                      >
                        {job.company.name}
                      </a>
                      <span>•</span>
                      <span class="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-map-pin-icon lucide-map-pin h-4 w-4"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {job.company.location}
                      </span>
                      <span>•</span>
                      <span class="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-clock-icon lucide-clock h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        Posted{' '}
                        {formatDistanceToNow(new Date(job.createdAt), {
                          addSuffix: true,
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                <p class="text-sm text-muted-foreground line-clamp-2">
                  {job.description}
                </p>

                <div class="flex flex-wrap gap-2">
                  <span class="badge badge-secondary">{job.type}</span>
                  {job.skills.map((skill) => (
                    <span key={skill} class="badge badge-outline">
                      {skill}
                    </span>
                  ))}
                </div>

                <div class="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div class="flex items-center gap-4">
                    <span class="text-sm font-semibold text-primary">
                      ${formatNumber(job.salaryMin)} - $
                      {formatNumber(job.salaryMax)}
                    </span>
                    <span class="text-xs text-muted-foreground flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-user-icon lucide-user h-4 w-4"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      {formatNumber(job.applicants)} applicants
                    </span>
                  </div>
                  <div class="flex gap-2">
                    <a
                      href="job-seeker/job-details.html"
                      class="btn btn-outline text-sm"
                    >
                      View Details
                    </a>
                    <button class="btn btn-primary text-sm">Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}
