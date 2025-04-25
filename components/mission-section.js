import { Globe, Shield, Scale } from "lucide-react"

export function MissionSection() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>

          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-emerald-400 rounded"></div>
          </div>

          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Making the digital world more secure, one conversation at a time.
          </p>

          <p className="text-slate-400 mb-12">
            At TrustWall, we believe that privacy shouldn't be sacrificed for the convenience of AI. Our mission is to
            create a safer digital environment where users can harness the power of AI assistants without compromising
            their personal information. We're committed to developing tools that put users back in control of their
            data, ensuring that sensitive information remains protected in an increasingly AI-driven world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="bg-slate-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Privacy Protection</h3>
              <p className="text-slate-400">Ensuring your sensitive information stays private when using AI tools</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="bg-slate-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Security</h3>
              <p className="text-slate-400">Building a more secure digital ecosystem for everyone</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="bg-slate-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ethical AI Use</h3>
              <p className="text-slate-400">Promoting responsible and ethical interaction with AI systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
