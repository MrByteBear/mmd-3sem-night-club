import DataFetcher from "@/app/components/(bjorn)/data-fetcher/DataFetcher";
import DataFetcherSSR from "@/app/components/(bjorn)/server-fetch/ServerFetch";

import GalleryContent from "./GalleryContent";

export default function SlidingGallery() {
  return (
    <DataFetcher endpoint="events">
      {(data) => <GalleryContent data={data} />}
    </DataFetcher>
  );
}
