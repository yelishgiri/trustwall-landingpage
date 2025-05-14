import { ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Install the Extension",
      description:
        "Add TrustWall to your Chrome browser with just one click from the Chrome Web Store.",
    },
    {
      number: "02",
      title: "Configure Your Protection",
      description:
        "Choose what types of information you want to protect, such as names, emails, addresses, and more.",
    },
    {
      number: "03",
      title: "Chat Safely with AI",
      description:
        "Use DeepSeek and other supported AI chatbots with confidence, knowing your sensitive information is protected.",
    },
    {
      number: "04",
      title: "Review and Adjust",
      description:
        "See what information was redacted and fine-tune your protection settings as needed.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            How TrustWall Works
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Protecting your information is simple with our easy-to-use Chrome
            extension.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl border border-slate-200 h-full flex flex-col">
                <div className="text-4xl font-bold text-emerald-400 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 flex-grow">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-slate-400 ml-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
