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
      <div class="mb-6 flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-semibold">Available Jobs</h2>
          <p class="text-sm text-muted-foreground mt-1">
            Showing {formatNumber(data?.count || 0)} results
          </p>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-sm text-muted-foreground">Sort by:</span>
          <div class="dropdown">
            <button
              class="btn btn-outline text-sm h-9"
              onclick="toggleDropdown('sortDropdown')"
            >
              Most Recent
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
                class="lucide lucide-chevron-down-icon lucide-chevron-down ml-2 h-3 w-3"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div id="sortDropdown" class="dropdown-content card p-2">
              <button class="w-full text-left text-sm p-2 hover:bg-accent rounded">
                Most Recent
              </button>

              <button class="w-full text-left text-sm p-2 hover:bg-accent rounded">
                Salary (High to Low)
              </button>
              <button class="w-full text-left text-sm p-2 hover:bg-accent rounded">
                Salary (Low to High)
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
