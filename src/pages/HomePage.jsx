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
      <main className="container mx-auto px-4 py-8">
        {/* <!-- Hero Section --> */}
        <Hero />

        {/* <!-- Search and Filters --> */}
        <section className="mb-8">
          <div className="card p-6">
            <div className="space-y-4">
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
        <div className="grid gap-4 md:gap-6">
          <JobCard data={data} isLoading={isLoading} isError={isError} />
        </div>

        {/* <!-- Load More / Pagination --> */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <button onClick={handleLoadMore} className="btn btn-outline">
            Load More Jobs
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <p className="text-sm text-muted-foreground">
            Showing {formatNumber(data?.data.length || 0)} of{' '}
            {formatNumber(data?.count || 0)} jobs
          </p>
        </div>
      </main>
    </>
  );
}
