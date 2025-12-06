'use client';
import { useEffect, useState } from 'react';

// Usage:
/*
import DataFetcherClient from "@/app/components/(bjorn)/client-fetch/ClientFetch";

function MyFunction({myData}) {

return (
  <>
  </>
  );
}

export default function ComponentName() {
  return (
    <DataFetcherClient endpoint="/path"> (for example "/events")
      {(whateverParam) => <MyFunction myData={whateverParam}/>}
    </DataFetcherClient>
  );
}

*/

function ApiLoaderClient({ endpoint, children }) {
  // Data is null until fetched
  const [data, setData] = useState(null);
  // Loading is true, while we wait for the data-fetch on our useEffect mount (dependancy array).
  // Since Suspense is more appropiate for SSR-Components, and this component is client-side, this explicit loading state manangement
  // - solution is more preferred.
  const [loading, setLoading] = useState(true);
  // Errors is null initially, hopefully we don't get any.
  const [error, setError] = useState(null);

  // Using useEffect, to run the fetchData effect callback alongside SSR-renders when the dependency array [...] changes:
  // on changes to the "endpoint" reference.
  useEffect(() => {
    async function fetchData() {
      // Uses the Try, Catch, Finally method, which is JS' error handling mechanism, to gracefully handle errors
      // - instead of crashing application. Other methods can be used for fetching of data from an API.
      // But for the sake of better error detection and handling, this was the solution that was opted for.
      try {
        // Try this, attempting to execute the code below, if any errors occur, jumps to catch
        setLoading(true);
        setError(null);
        const response = await fetch(`http://localhost:4000${endpoint}`);
        
        // If the fetch returns as an error status (e.g. 404), throws a new Error object to be rendered in Catch
        // with the message "Failed to load {endpoint}"
        if (!response.ok) {
          throw new Error(`Failed to load ${endpoint}`);
        }
        
        // If we didn't get any errors, sets const result as the json object
        // and subsequently stores it in our state setData(result)
        const result = await response.json();
        setData(result);
      } catch (err) {
        // If we have an error, it will catch the error
        setError(err.message);
      } finally {
        // When try is succesful, jumps to finally, and sets the state of Loading to false again.
        setLoading(false);
      }
    }
    
    // Invoking async function, due to useEffect being synchronous, but we declare an async function inside our useEffect
    // Therefore, to prevent syntax errors, we invoke it at the end, outside of our function block scope.
    fetchData();
  }, [endpoint]);

  // Displays of various status updates, loading if the api call is being slow,
  if (loading) return <div>Loading...</div>;
  // If we have an error message, it will be displayed here
  if (error) return <div>Error: {error}</div>;

  // Pass data state to children.
  return <>{children(data)}</>;
}

export default function DataFetcherClient({ endpoint, children }) {
  return (
      <ApiLoaderClient endpoint={endpoint}>
        {children}
      </ApiLoaderClient>
  );
}