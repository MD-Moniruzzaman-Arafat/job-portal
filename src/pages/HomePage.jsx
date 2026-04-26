import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import { getAllJobs } from '../api/api';
import Filter from '../components/HomePageComponent/Filter';
import Hero from '../components/HomePageComponent/Hero';
import JobCard from '../components/HomePageComponent/JobCard';
import Result from '../components/HomePageComponent/Result';
import Search from '../components/HomePageComponent/Search';
import { formatNumber } from '../utils';

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['jobs', page],
    queryFn: getAllJobs,
  });

  const handleLoadMore = () => {
    if (data?.currentPage < data?.totalPages) {
      setSearchParams({ page: page + 1 });
    }
  };

  return (
    <>
      <main class="container mx-auto px-4 py-8">
        {/* <!-- Hero Section --> */}
        <Hero />

        {/* <!-- Search and Filters --> */}
        <section class="mb-8">
          <div class="card p-6">
            <div class="space-y-4">
              {/* <!-- Search Bar --> */}
              <Search />

              {/* <!-- Filters --> */}
              <Filter />
            </div>
          </div>
        </section>

        {/* <!-- Results Header --> */}
        <Result />

        {/* <!-- Job Cards Grid --> */}
        <div class="grid gap-4 md:gap-6">
          <JobCard data={data} isLoading={isLoading} isError={isError} />
        </div>

        {/* <!-- Load More / Pagination --> */}
        <div class="mt-12 flex flex-col items-center gap-4">
          <button onClick={handleLoadMore} class="btn btn-outline">
            Load More Jobs
            <svg
              class="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <p class="text-sm text-muted-foreground">
            Showing {formatNumber(data?.data.length || 0)} of{' '}
            {formatNumber(data?.count || 0)} jobs
          </p>
        </div>
      </main>
    </>
  );
}
