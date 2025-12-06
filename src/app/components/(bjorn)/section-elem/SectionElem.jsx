export default function SectionElem({
  title,
  children,
  variant = "default",
  className = "",
  backgroundImage,
}) {
  const variants = {
    default: "grid place-items-center px-6",
    breakout:
      "col-span-full grid grid-cols-subgrid place-items-center *:col-start-2",
  };

  return (
    <section
      className={`${variants[variant]} ${className}`}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      <div className="relative mb-16">
        <h1 className="tracking-7pct pb-4 text-4xl font-medium uppercase">
          {title}
        </h1>
        <span
          className="bottomLine-l absolute -bottom-3 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        />
      </div>
      {children}
    </section>
  );
}
