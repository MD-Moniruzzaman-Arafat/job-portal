import { useQuery } from '@tanstack/react-query';
import { getAllJobs } from '../../api/api';
import { formatNumber } from '../../utils';

export default function Result() {
  const { data } = useQuery({
    queryKey: ['jobs'],
    queryFn: getAllJobs,
  });
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Available Jobs</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Showing {formatNumber(data?.count || 0)} results
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <div className="dropdown">
            <button className="btn btn-outline text-sm h-9">
              Most Recent
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down-icon lucide-chevron-down ml-2 h-3 w-3"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div id="sortDropdown" className="dropdown-content card p-2">
              <button className="w-full text-left text-sm p-2 hover:bg-accent rounded">
                Most Recent
              </button>

              <button className="w-full text-left text-sm p-2 hover:bg-accent rounded">
                Salary (High to Low)
              </button>
              <button className="w-full text-left text-sm p-2 hover:bg-accent rounded">
                Salary (Low to High)
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
