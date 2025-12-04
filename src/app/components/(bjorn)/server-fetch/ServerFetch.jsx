"use server";
import { Suspense } from 'react';

async function ApiLoaderSSR({ endpoint, children }) {
  try {
    const response = await fetch(`http://localhost:4000${endpoint}`);
    
    if (!response.ok) {
      throw new Error(`Failed to load ${endpoint}`);
    }
    
    const data = await response.json();
    
    return <>{children(data)}</>;
  } catch (error) {
    return <div>Error: {error}</div>;
  }
}

export default function DataFetcherSSR({ endpoint, children }) {
  return (
    <Suspense fallback={<div>Loading data...</div>}>
      <ApiLoaderSSR endpoint={endpoint}>
        {children}
      </ApiLoaderSSR>
    </Suspense>
  );
}