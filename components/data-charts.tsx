'use client';

import { useGetSummary } from '@/features/summary/api/use-get-summary';

export const DataCharts = () => {
  const { data, isLoading } = useGetSummary();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div>DataCharts</div>;
};
