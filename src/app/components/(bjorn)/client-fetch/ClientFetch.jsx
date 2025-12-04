'use client';
import { useEffect, useState, Suspense } from 'react';

function ApiLoaderClient({ endpoint, children }) {
  // Data is null until fetched
  const [data, setData] = useState(null);
  // Loading is true, while we wait for the data-fetch on our useEffect mount (dependancy array).
  const [loading, setLoading] = useState(true);
  // Errors is null initially, hopefully we don't get any.
  const [error, setError] = useState(null);

  // Using useEffect, to run the fetchData effect callback alongside SSR-renders when the dependency array [...] changes:
  // on changes to the "endpoint" reference.
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`http://localhost:4000${endpoint}`);
        
        if (!response.ok) {
          throw new Error(`Failed to load ${endpoint}`);
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    // Invoking async function, due to useEffect being synchronous, but we declare an async function inside our useEffect
    // Therefore, to prevent syntax errors, we invoke it at the end, outside of our function block scope.
    fetchData();
  }, [endpoint]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <>{children(data)}</>;
}

export default function DataFetcherClient({ endpoint, children }) {
  return (
    <Suspense fallback={<div>Loading data...</div>}>
      <ApiLoaderClient endpoint={endpoint}>
        {children}
      </ApiLoaderClient>
    </Suspense>
  );
}