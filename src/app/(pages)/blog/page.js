import BlogList from "@/app/components/(penny)/BlogList";
import patternBg from "@/app/assets/bg/pattern_bg.jpg";
import PageNav from "@/app/components/(penny)/PageNav";
import HeaderNav from "@/app/components/(bjorn)/header-elem/HeaderNav";
import SubHeader from "@/app/components/(Meleese)/SubHeader";
export default function Home() {
  return (
    <div>
      {/* subpage hero */}
      <HeaderNav />
      <SubHeader title="Blog" />

      <main
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${patternBg.src})` }}
      >
        <BlogList />

        <PageNav />
      </main>
    </div>
  );
}
