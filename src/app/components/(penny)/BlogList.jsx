const BlogList = () => {
  return (
    <ul>
      <li>
        <img src="https://cataas.com/cat" alt="" />
        <h2 className="text-2xl uppercase">More than 20 years of night club</h2>
        <p className="text-accent uppercase">
          BY: Admin / 3 Comments / 16 Nov 2018
        </p>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
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
    </ul>
  );
};

export default BlogList;
