// this component is used in the WelcomeSection on the homepage

import CornerElem from "../(bjorn)/corner-elem/CornerElem";
import LogoGuy from "@/app/assets/icon/logoGuy.svg";

import Image from "next/image";
// recieves header, text and children as props
const WelcomeSectionImages = ({ header, text, children, variant }) => {
  return (
    <>
      <div className="group grid grid-cols-1 grid-rows-1">
        <div className="-col-start-1 row-start-1">{children}</div>

        {/* hover content */}
        <div className="group-hover:border-accent relative -col-start-1 row-start-1 hidden max-w-sm bg-black p-6 text-white group-hover:block group-hover:border-t group-hover:border-b">
          <CornerElem topLeft={true} className="w-11" />
          <div className="align-center flex h-full flex-col justify-center">
            <div className="border-accent mx-auto mb-4 flex w-24 items-center justify-center rounded-2xl border-2 p-4">
              <Image src={LogoGuy} alt="Logo Guy Icon" width={40} />
            </div>

            <h3 className="text-accent mt-4 text-center text-2xl font-medium tracking-[0.48px] uppercase">
              {header || "facilities"}
            </h3>
            {/* uses placeholder text if "text" prop is empty */}
            <p className="mt-4 text-center font-medium tracking-[0.36px]">
              {text ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rem enim commodi consequatur ducimus quaerat molestiae quisquam vitae placeat distinctio illum magnam unde odio sequi eius, nemo alias "}
            </p>
          </div>
          <CornerElem
            bottomRight={true}
            className="absolute right-0 bottom-0 w-11"
          />
        </div>
      </div>
    </>
  );
};

export default WelcomeSectionImages;
