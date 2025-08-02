interface Step {
  number: number;
  title: string;
  description: string[];
}

const StepsSection = ({ steps }: { steps: Step[] }) => (
  <section className="w-full max-w-[1200px] px-6 py-12 flex flex-col gap-8  rounded-3xl">
    <h2 className="text-gray-900 text-2xl md:text-3xl font-bold text-center mb-4">
      가상농장 이용 방법
    </h2>
    <div className="flex flex-wrap justify-center gap-6">
      {steps.map((step) => (
        <div
          key={step.number}
          className="w-full max-w-[320px] flex flex-col items-center gap-4 bg-sky-50 rounded-2xl p-6"
        >
          <div className="w-10 h-10 bg-mint-600 rounded-full flex items-center justify-center text-common-000 text-lg font-bold">
            {step.number}
          </div>
          <div className="text-gray-900 text-lg font-bold text-center">
            {step.title}
          </div>
          <div className="text-gray-900 text-base text-center flex flex-col gap-1">
            {step.description.map((line, idx) => (
              <span key={idx}>{line}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default StepsSection;
