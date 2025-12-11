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
// Asset Imports
import HeaderBg2 from "@/app/assets/bg/header_bg_2.jpg";
import BottomLine from "@/app/assets/bottom_line.png";
import LogoSvg from "@/app/assets/icon/BetterLogo.svg";
import MainBg from "@/app/assets/bg/pattern_bg.jpg";
import IntroImg1 from "@/app/assets/content-img/thumb1.jpg";
import IntroImg2 from "@/app/assets/content-img/reastaurant_1.jpg";
import IntroImg3 from "@/app/assets/content-img/thumb2.jpg";
import SliderBg from "@/app/assets/bg/slider_bg_overlay.png";


export default function Home() {
  return (
    <>
      <HeaderNav>
        <div className="grid place-items-center">
          <Image
            src={HeaderBg2}
            alt="Hero Banner"
            className="[grid-area:1/1] object-cover h-[868px]"
          />
          <div className="grid place-items-center [grid-area:1/1] px-8 gap-y-4">
          <Image src={LogoSvg} alt="Logo" className="w-full max-w-[745px]"/>
              <p className="text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-xs font-medium tracking-[100%] uppercase">
                Have a good time
              </p>
              <Image src={BottomLine} alt="Ornamental bottom border" className="w-full" />
          </div>
        </div>
      </HeaderNav>
      <main style={{ backgroundImage: `url(${MainBg.src})`}}>
        <SectionElem title="Welcome in nightclub" className="py-28">
          <div className="flex gap-8 mt-8 max-lg:flex-wrap max-lg:justify-center">
            <Image src={IntroImg1} alt="Restaurant"/>
            <Image src={IntroImg2} alt="Restaurant Dishes"/>
            <Image src={IntroImg3} alt="Bar"/>
          </div>
        </SectionElem>
        <SectionElem title="Events of the month" variant="breakout" className="bg-cover bg-center py-16" backgroundImage={SliderBg.src}>
          <SlidingGallery />
        </SectionElem>
        <SectionElem title="Night club gallery" variant="breakoutAlt" className="my-12">
          {/* <ClubGallery displayFull={true}/> */}
          <ClubGalleryAnimated />
        </SectionElem>
        <SectionElem title="Night club track" className="my-12">
          <MusicPlayer/>
        </SectionElem>
        <SectionElem title="Latest Videos"><VideoPlayer/></SectionElem>
        <Subscribe />
      </main>
      {/* <FooterBox /> */}
    </>
  );
}
