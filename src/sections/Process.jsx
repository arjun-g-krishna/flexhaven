const ProcessCard = ({ number, title, content }) => {
  return (
    <div className="process-card relative bg-verylightgreen rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out p-4 sm:p-6 md:p-8 w-full max-w-[16rem] sm:max-w-[20rem] min-h-[12rem] sm:min-h-[16rem] flex flex-col items-center justify-center text-center animate-appear">
      <div className="absolute -top-8 md:-top-10 w-12 h-12 md:w-[5rem] md:h-[5rem] bg-orangeish rounded-full flex items-center justify-center shadow-md">
        <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
          {number}
        </span>
      </div>
      <div className="mt-8 sm:mt-10 md:mt-12">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 sm:mb-3">
          {title}
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
};

export default function Process() {
  const processSteps = [
    {
      number: 1,
      title: "Book",
      content: "Choose a package and share your details",
    },
    {
      number: 2,
      title: "Design",
      content: "Receive your moodboards and layout",
    },
    {
      number: 3,
      title: "Style",
      content: "Shop and style at your own pace",
    },
  ];

  return (
    <section
      id="process"
      className="section-base section-yellow-bg flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 w-full">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={index}
              number={step.number}
              title={step.title}
              content={step.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
