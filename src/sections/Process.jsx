const ProcessCard = ({ number, title, content }) => {
  return (
    <div className="relative bg-verylightgreen rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out p-4 md:p-8 w-56 h-56 md:w-80 md:h-80 flex flex-col items-center justify-center text-center flex-shrink-0">
      <div className="absolute -top-8 md:-top-10 w-12 h-12 md:w-[5rem] md:h-[5rem] bg-orangeish rounded-full flex items-center justify-center shadow-md">
        <span className="text-white font-bold text-2xl md:text-3xl">
          {number}
        </span>
      </div>
      <div className="mt-6 md:mt-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 md:mb-3">
          {title}
        </h3>
        <p className="text-lg md:text-2xl text-white leading-relaxed">
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
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-anotheryellow"
    >
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 lg:gap-24 w-full">
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
