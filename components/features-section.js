import { Shield, Lock, Eye, UserX, AlertTriangle, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-emerald-400" />,
      title: "Automatic Redaction",
      description: "Automatically detects and redacts sensitive information before it's sent to AI chatbots.",
    },
    {
      icon: <Lock className="h-6 w-6 text-emerald-400" />,
      title: "Privacy First",
      description: "Your data never leaves your browser. All redaction happens locally on your device.",
    },
    {
      icon: <UserX className="h-6 w-6 text-emerald-400" />,
      title: "Identity Protection",
      description: "Prevents accidental sharing of personal identifiers like names, emails, and addresses.",
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-emerald-400" />,
      title: "Warning System",
      description: "Alerts you when you're about to share potentially sensitive information.",
    },
    {
      icon: <Eye className="h-6 w-6 text-emerald-400" />,
      title: "Customizable Filters",
      description: "Choose what types of information you want to protect and redact.",
    },
    {
      icon: <Zap className="h-6 w-6 text-emerald-400" />,
      title: "DeepSeek Integration",
      description: "Currently works with DeepSeek AI chatbot, with more integrations coming soon.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Protect Your Data While Using AI</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            TrustWall provides powerful features to keep your sensitive information safe when interacting with AI
            chatbots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
