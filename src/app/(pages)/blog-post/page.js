export default function Home() {
  return (
    <div>
      {/* subpage hero */}
      <main>
        <img
          src="https://cataas.com/cat"
          alt=""
          className="mb-4 h-[221px] w-full object-cover"
        />
        <h2 className="mt-4 text-2xl font-medium tracking-[0.48px] uppercase">
          More than 20 years of night club
        </h2>
        <p className="text-accent mt-4 font-medium tracking-[0.36px] uppercase">
          BY: Admin / 3 Comments / 16 Nov 2018
        </p>
        <p className="mt-4 text-[16px] leading-6 font-medium tracking-[0.32px] md:text-[18px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structure.
        </p>
        <p className="text-[16px] leading-6 font-medium tracking-[0.32px] md:pt-11">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        {/* comments */}
        <section className="mt-[86px]">
          <h2 className="mb-11 pl-3 text-[32px] font-bold uppercase">
            x comments
          </h2>
          <ul>
            <li className="mb-[54px]">
              <h3 className="mb-6 text-[18px] font-medium tracking-[0.36px]">
                Kavin Parkar -
                <span className="text-accent text-[16px] tracking-[0.32px]">
                  {" "}
                  Posted 03 jan 2018
                </span>
              </h3>
              <p className="text-[16px] font-medium tracking-[0.32px]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections.
              </p>
            </li>

            <li className="mb-[54px]">
              <h3 className="mb-6 text-[18px] font-medium tracking-[0.36px]">
                Kavin Parkar -
                <span className="text-accent text-[16px] tracking-[0.32px]">
                  {" "}
                  Posted 03 jan 2018
                </span>
              </h3>
              <p className="text-[16px] font-medium tracking-[0.32px]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections.
              </p>
            </li>
            <li className="mb-[54px]">
              <h3 className="mb-6 text-[18px] font-medium tracking-[0.36px]">
                Kavin Parkar -
                <span className="text-accent text-[16px] tracking-[0.32px]">
                  {" "}
                  Posted 03 jan 2018
                </span>
              </h3>
              <p className="text-[16px] font-medium tracking-[0.32px]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections.
              </p>
            </li>
          </ul>
          <h2 className="mb-11 text-[32px] font-bold uppercase">
            Leave a comment
          </h2>
          {/* form */}
          <form>
            {/* input fields */}
            <div className="mt-8 flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border-foreground text-foreground placeholder:text-foreground w-full border px-3 py-[18px] md:px-6 md:py-8"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border-foreground text-foreground placeholder:text-foreground w-full border px-3 py-[18px] md:px-6 md:py-8"
                />
              </div>
              <textarea
                placeholder="Your Comment"
                className="border-foreground text-foreground placeholder:text-foreground h-32 min-h-80 w-full border px-3 py-[18px] md:px-6 md:py-8"
              ></textarea>
            </div>
            {/* submit button */}
            <div className="mt-4 flex justify-end">
              <div className="inline-flex w-44 items-center justify-center gap-2.5 border-t-2 border-b-2 border-white px-4 py-5">
                <div className="justify-start font-['Ubuntu'] text-lg font-medium tracking-tight text-white uppercase">
                  Read more
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
