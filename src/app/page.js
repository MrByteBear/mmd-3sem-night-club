// NextJS Components
import Image from "next/image";
// Components
import HeaderNav from "@/app/components/(bjorn)/header-elem/HeaderNav";
import FooterBox from "@/app/components/(bjorn)/footer-elem/FooterBox";
import SectionElem from "@/app/components/(bjorn)/section-elem/SectionElem";
import SlidingGallery from "@/app/components/(bjorn)/sliding-gallery/SlidingGallery";
import ClubGallery from "@/app/components/(bjorn)/club-gallery/ClubGallery";
import MusicPlayer from "@/app/components/(bjorn)/music-player/MusicPlayer";
import Subscribe from "./components/(Meleese)/Subscribe";
import WelcomeSectionImages from "./components/(penny)/WelcomeSectionImages";
// Asset Imports
import HeaderBg2 from "@/app/assets/bg/header_bg_2.jpg";
import BottomLine from "@/app/assets/bottom_line.png";
import LogoSvg from "@/app/assets/icon/BetterLogo.svg";
import MainBg from "@/app/assets/bg/pattern_bg.jpg";
import IntroImg1 from "@/app/assets/content-img/thumb1.jpg";
import IntroImg2 from "@/app/assets/content-img/reastaurant_1.jpg";
import IntroImg3 from "@/app/assets/content-img/thumb2.jpg";
import SliderBg from "@/app/assets/bg/slider_bg_overlay.png";
import VideoPlayer from "./components/(Meleese)/VideoPlayer";

export default function Home() {
  return (
    <>
      <HeaderNav>
        <div className="grid place-items-center">
          <Image
            src={HeaderBg2}
            alt="Hero Banner"
            className="h-[868px] object-cover [grid-area:1/1]"
          />
          <div className="grid place-items-center gap-y-4 px-8 [grid-area:1/1]">
            <Image src={LogoSvg} alt="Logo" className="w-full max-w-[745px]" />
            <p className="text-3xl font-medium tracking-[100%] uppercase max-lg:text-2xl max-md:text-xl max-sm:text-xs">
              Have a good time
            </p>
            <Image
              src={BottomLine}
              alt="Ornamental bottom border"
              className="w-full"
            />
          </div>
        </div>
      </HeaderNav>
      <main style={{ backgroundImage: `url(${MainBg.src})` }}>
        <SectionElem title="Welcome in nightclub" className="py-28">
          <div className="mt-8 flex gap-8 max-lg:flex-wrap max-lg:justify-center">
            <WelcomeSectionImages header={"nightclub"}>
              <Image src={IntroImg1} alt="Restaurant Dishes" />
            </WelcomeSectionImages>
            <Image src={IntroImg2} alt="Restaurant Dishes" />
            <Image src={IntroImg3} alt="Bar" />
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
          <ClubGallery displayFull={true} />
        </SectionElem>
        <SectionElem title="Night club track" className="my-12">
          <MusicPlayer />
        </SectionElem>
        <SectionElem title="Latest Videos">
          <VideoPlayer />
        </SectionElem>
        <Subscribe />
      </main>
      {/* <FooterBox /> */}
    </>
  );
}
