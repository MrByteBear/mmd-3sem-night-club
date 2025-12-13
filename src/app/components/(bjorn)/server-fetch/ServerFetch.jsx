import { Suspense } from "react";

// Usage:
/*
import DataFetcherSSR from "@/app/components/(bjorn)/server-fetch/ServerFetch";

function MyFunction({myData}) {

return (
  <>
  </>
  );
}

export default function ComponentName() {
  return (
    <DataFetcherSSR endpoint="/path"> (for example "/events")
      {(whateverParam) => <MyFunction myData={whateverParam}/>}
    </DataFetcherSSR>
  );
}
*/

// Similar to ClientFetch.jsx, but slightly less "complicated".
// async function (because we are fetching) like in ClientFetch.jsx

// Uses the same try catch principality in ClientFetch, only without a "finally" since
// - there isn't anything needed to "cleanup" or guaranteed code that we always want to run last.
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
      <ApiLoaderSSR endpoint={endpoint}>{children}</ApiLoaderSSR>
    </Suspense>
  );
}
