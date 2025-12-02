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
        <ul className="">
          <li className="bg-background pb-8">
            <img src="https://cataas.com/cat" alt="" />
            <h2 className="text-2xl font-medium tracking-[0.48px] uppercase">
              More than 20 years of night club
            </h2>
            <p className="text-accent font-medium tracking-[0.36px] uppercase">
              BY: Admin / 3 Comments / 16 Nov 2018
            </p>
            <p className="text-[16px] leading-6 font-medium tracking-[0.32px]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
            {/* btn */}
            <div className="flex items-center justify-center pt-6">
              <div className="inline-flex w-44 items-center justify-center gap-2.5 border-t-2 border-b-2 border-white px-4 py-5">
                <div className="justify-start font-['Ubuntu'] text-lg font-medium tracking-tight text-white uppercase">
                  Read more
                </div>
              </div>
            </div>
          </li>
          {/* just for the visuals */}
          <li className="bg-background pb-8">
            <img src="https://cataas.com/cat" alt="" />
            <h2 className="text-2xl font-medium tracking-[0.48px] uppercase">
              More than 20 years of night club
            </h2>
            <p className="text-accent font-medium tracking-[0.36px] uppercase">
              BY: Admin / 3 Comments / 16 Nov 2018
            </p>
            <p className="text-[16px] leading-6 font-medium tracking-[0.32px]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
            {/* btn */}
            <div className="flex items-center justify-center pt-6">
              <div className="inline-flex w-44 items-center justify-center gap-2.5 border-t-2 border-b-2 border-white px-4 py-5">
                <div className="justify-start font-['Ubuntu'] text-lg font-medium tracking-tight text-white uppercase">
                  Read more
                </div>
              </div>
            </div>
          </li>
          {/* just for the visuals */}
          <li className="bg-background pb-8">
            <img src="https://cataas.com/cat" alt="" />
            <h2 className="text-2xl font-medium tracking-[0.48px] uppercase">
              More than 20 years of night club
            </h2>
            <p className="text-accent font-medium tracking-[0.36px] uppercase">
              BY: Admin / 3 Comments / 16 Nov 2018
            </p>
            <p className="text-[16px] leading-6 font-medium tracking-[0.32px]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
            {/* btn */}
            <div className="flex items-center justify-center pt-6">
              <div className="inline-flex w-44 items-center justify-center gap-2.5 border-t-2 border-b-2 border-white px-4 py-5">
                <div className="justify-start font-['Ubuntu'] text-lg font-medium tracking-tight text-white uppercase">
                  Read more
                </div>
              </div>
            </div>
          </li>
          <PageNav />
        </ul>
      </main>
    </div>
  );
}
