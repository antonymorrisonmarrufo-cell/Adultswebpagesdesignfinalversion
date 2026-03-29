interface Step {
  number: number;
  title: string;
  description: string;
}

interface StepperProps {
  steps: Step[];
}

export default function Stepper({ steps }: StepperProps) {
  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-[#EF3688] text-white flex items-center justify-center text-xl">
              {step.number}
            </div>
            {index < steps.length - 1 && (
              <div className="w-0.5 h-16 bg-[#EF3688] mx-auto mt-2 opacity-30"></div>
            )}
          </div>
          <div className="flex-1 pt-2">
            <h3 className="text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
