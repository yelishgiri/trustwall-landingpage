import { User, Building2, Briefcase } from "lucide-react"

export function MarketSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Who TrustWall Is For</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Protecting sensitive information for individuals and businesses alike
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* B2C Section */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-shadow">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <User className="h-8 w-8 text-emerald-600" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Individual Users</h3>

            <p className="text-slate-600 mb-6">
              For everyday users who want to protect their personal information while using AI chatbots for:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Personal assistance and productivity</span>
              </li>
              <li className="flex items-start">
                <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Research and learning</span>
              </li>
              <li className="flex items-start">
                <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Creative writing and content generation</span>
              </li>
              <li className="flex items-start">
                <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Professional development</span>
              </li>
            </ul>
          </div>

          {/* B2B Section */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-shadow">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Building2 className="h-8 w-8 text-emerald-600" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Businesses & Law Firms</h3>

            <p className="text-slate-600 mb-6">
              For organizations that need to protect confidential information while leveraging AI tools:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Law firms handling sensitive client information</span>
              </li>
              <li className="flex items-start">
                <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Financial institutions managing private financial data</span>
              </li>
              <li className="flex items-start">
                <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Healthcare providers protecting patient information</span>
              </li>
              <li className="flex items-start">
                <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Enterprise teams collaborating with AI tools</span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 text-emerald-500 mr-2" />
                <span className="text-slate-900 font-medium">Law Firm Spotlight</span>
              </div>
              <p className="mt-2 text-slate-600">
                TrustWall provides specialized protection for legal professionals who need to leverage AI while
                maintaining client confidentiality and meeting ethical obligations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
