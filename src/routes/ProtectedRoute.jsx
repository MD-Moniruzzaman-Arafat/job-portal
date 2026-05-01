import { useQuery } from '@tanstack/react-query';
import { me } from '../api/api';

export default function ProtectedRoute({ children }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['me'],
    queryFn: me,
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  if (data?.data?.role === 'USER') return children;
}
