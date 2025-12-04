export default function SectionElem({ title, children, variant = "default" }) {
  const variants = {
    default: "grid place-items-center",
    breakout:
      "col-span-full grid grid-cols-subgrid place-items-center *:col-start-2",
  };

  return (
    <section className={`${variants[variant]} px-6`}>
      <div className="relative">
        <h1 className="text-4xl font-medium tracking-7pct uppercase">{title}</h1>
        <span
          className="bottomLine-l absolute -bottom-3 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        />
      </div>
      {children}
    </section>
  );
}
