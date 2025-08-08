
export default function StepList({ steps }) {
  return (
    <div className="py-12 max-w-3xl mx-auto space-y-8">
      {steps.map((step, idx) => (
        <div key={idx} className="flex flex-col md:flex-row md:items-start">
          <div className="text-4xl font-bold text-primary-blue mr-4">{idx+1}</div>
          <div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-gray-700">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
