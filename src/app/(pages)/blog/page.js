import BlogList from "@/app/components/(penny)/BlogList";
import patternBg from "@/app/assets/bg/pattern_bg.jpg";
import PageNav from "@/app/components/(penny)/PageNav";
import HeaderNav from "@/app/components/(bjorn)/header-elem/HeaderNav";
import SubHeader from "@/app/components/(Meleese)/SubHeader";
import SectionElem from "@/app/components/(bjorn)/section-elem/SectionElem";
export default function Home() {
  return (
    <div>
      <HeaderNav />
      <SubHeader title="Blog" />

      <main
        className="col-start-1 col-end-4 grid bg-cover bg-center"
        style={{ backgroundImage: `url(${patternBg.src})` }}
      >
        <BlogList />
        <PageNav />
      </main>
    </div>
  );
}
