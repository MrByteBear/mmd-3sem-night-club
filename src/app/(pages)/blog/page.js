import BlogList from "@/app/components/(penny)/BlogList";
import patternBg from "@/app/assets/bg/pattern_bg.jpg";
import HeaderNav from "@/app/components/(bjorn)/header-elem/HeaderNav";
import SubHeader from "@/app/components/(Meleese)/SubHeader";
import { Suspense } from "react";
import SubscribeReactForm from "@/app/components/(penny)/SubscribeReactForm";

export default async function Blog({ searchParams }) {
  const params = await searchParams;
  return (
    <div>
      <HeaderNav />
      <SubHeader title="Blog" />

      <main
        className="col-start-1 col-end-4 grid bg-cover bg-center"
        style={{ backgroundImage: `url(${patternBg.src})` }}
      >
        <Suspense fallback={<div>Loading blog posts...</div>}>
          <BlogList searchParams={params} />
          <SubscribeReactForm />
        </Suspense>
      </main>
    </div>
  );
}
