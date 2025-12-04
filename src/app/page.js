// NextJS Components
import Image from "next/image";
// Components
import HeaderNav from "@/app/components/(bjorn)/header-elem/HeaderNav";
import FooterBox from "@/app/components/(bjorn)/footer-elem/FooterBox";
import SectionElem from "@/app/components/(bjorn)/section-elem/SectionElem";
import Subscribe from "./components/(Meleese)/Subscribe";
// Asset Imports
import HeaderBg2 from "@/app/assets/bg/header_bg_2.jpg";
import BottomLine from "@/app/assets/bottom_line.png";
import LogoSvg from "@/app/assets/icon/BetterLogo.svg";
import MainBg from "@/app/assets/bg/pattern_bg.jpg";

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
        <SectionElem title="Welcome in nightclub"></SectionElem>
        <Subscribe />
      </main>
      <FooterBox />
    </>
  );
}
