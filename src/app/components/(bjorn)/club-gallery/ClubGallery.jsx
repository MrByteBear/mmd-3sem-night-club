import DataFetcherSSR from "@/app/components/(bjorn)/server-fetch/ServerFetch";
import Image from "next/image";

function MyFunction({myData}) {

return (
  <>
  <div></div>
  </>
  );
}

export default function ClubGallery() {
  return (
    <DataFetcherSSR endpoint="/path">
      {(whateverParam) => <MyFunction myData={whateverParam}/>}
    </DataFetcherSSR>
  );
}