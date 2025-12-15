import DataFetcher from "@/app/components/(bjorn)/data-fetcher/DataFetcher";
import TestimonialsContent from "./TestimonialsContent";

export default function TestimonialsSection() {
  return (
    <DataFetcher endpoint="testimonials">
      {(data) => <TestimonialsContent data={data} />}
    </DataFetcher>
  );
}
