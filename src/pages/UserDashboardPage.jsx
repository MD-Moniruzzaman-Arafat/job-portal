import { useQuery } from '@tanstack/react-query';
import { me } from '../api/api';
import UserDashboard from '../components/UserDashboard/UserDashboard';

export default function UserDashboardPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['me'],
    queryFn: me,
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  console.log(data);
  return (
    <>
      <UserDashboard />
    </>
  );
}
