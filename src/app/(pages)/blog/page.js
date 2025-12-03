import BlogList from "@/app/components/(penny)/BlogList";
import patternBg from "@/app/assets/bg/pattern_bg.jpg";
import PageNav from "@/app/components/(penny)/PageNav";

export default function Home() {
  return (
    <div>
      {/* subpage hero */}
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
