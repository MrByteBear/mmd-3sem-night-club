import Image from "next/image";
import SampleElem from "@/app/components/(bjorn)/sample-elem/SampleElem";
import BreakoutElem from "@/app/components/(bjorn)/breakout-elem/BreakoutElem";

export default function Home() {
  return (
    <main>
      <SampleElem/>
      <BreakoutElem/>
    </main>
  );
}
