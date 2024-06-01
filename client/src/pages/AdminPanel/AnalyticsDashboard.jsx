import React, { useEffect, useState } from 'react';

const AnalyticsDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/analytics');
        const data = await response.json();
        setAnalyticsData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Analytics Dashboard</h1>
      {analyticsData && (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">Active Users</h2>
          <p className="text-gray-600">{analyticsData.rowCount}</p>
        </div>
      )}
    </div>
  );
};

export default AnalyticsDashboard;