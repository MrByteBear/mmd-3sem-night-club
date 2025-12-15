// NextJS Components
import Image from "next/image";
// Components
import HeaderNav from "@/app/components/(bjorn)/header-elem/HeaderNav";
import FooterBox from "@/app/components/(bjorn)/footer-elem/FooterBox";
import SectionElem from "@/app/components/(bjorn)/section-elem/SectionElem";
import SlidingGallery from "@/app/components/(bjorn)/sliding-gallery/SlidingGallery";
import ClubGallery from "@/app/components/(bjorn)/club-gallery/ClubGallery";
import ClubGalleryAnimated from "./components/(Meleese)/gallery/ClubGalleryAnimated";
import MusicPlayer from "@/app/components/(bjorn)/music-player/MusicPlayer";
import VideoPlayer from "./components/(Meleese)/VideoPlayer";
import Subscribe from "./components/(Meleese)/Subscribe";
import WelcomeSectionImages from "./components/(penny)/WelcomeSectionImages";
import RecentBlog from "./components/(penny)/RecentBlog";
import SubscribeReactForm from "./components/(penny)/SubscribeReactForm";
import TestimonialsElem from "@/app/components/(bjorn)/testimonials-elem/TestimonialsElem";
// Asset Imports
import MainBg from "@/app/assets/bg/pattern_bg.jpg";
import IntroImg1 from "@/app/assets/content-img/thumb1.jpg";
import IntroImg2 from "@/app/assets/content-img/reastaurant_1.jpg";
import IntroImg3 from "@/app/assets/content-img/thumb2.jpg";
import SliderBg from "@/app/assets/bg/slider_bg_overlay.png";
import HeroBanner from "./components/(bjorn)/hero-banner/HeroBanner";

export default function Home() {
  return (
    <>
      <HeroBanner/>
      <HeaderNav/>
      <main style={{ backgroundImage: `url(${MainBg.src})` }}>
        <SectionElem title="Welcome in nightclub" className="py-28">
          <div className="mt-8 flex gap-8 max-lg:flex-wrap max-lg:justify-center">
            <WelcomeSectionImages header={"nightclub"}>
              <Image
                src={IntroImg1}
                alt="Restaurant Dishes"
                className="h-full w-full"
              />
            </WelcomeSectionImages>
            <WelcomeSectionImages header={"restaurant"}>
              <Image
                src={IntroImg2}
                alt="Restaurant Dishes"
                className="h-full w-full"
              />
            </WelcomeSectionImages>
            <WelcomeSectionImages header={"bar"}>
              <Image
                src={IntroImg3}
                alt="Restaurant Dishes"
                className="h-full w-full"
              />
            </WelcomeSectionImages>
          </div>
        </SectionElem>
        <SectionElem
          title="Events of the month"
          variant="breakout"
          className="bg-cover bg-center py-16"
          backgroundImage={SliderBg.src}
        >
          <SlidingGallery />
        </SectionElem>

        <SectionElem
          title="Night club gallery"
          variant="breakoutAlt"
          className="my-12"
        >
          {/* <ClubGallery displayFull={true}/> */}
          <ClubGalleryAnimated />
        </SectionElem>
        <SectionElem title="Night club track" className="my-12">
          <MusicPlayer />
        </SectionElem>
        <SectionElem title="Latest Videos">
          <VideoPlayer />
        </SectionElem>
        <SectionElem variant="breakoutAlt" className="my-12">
          <TestimonialsElem />
        </SectionElem>
        <SectionElem title="Recent blog">
          <RecentBlog />
        </SectionElem>
        <SubscribeReactForm />
      </main>
      {/* <FooterBox /> */}
    </>
  );
}
