import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="h-6 w-6 text-emerald-400 mr-2" />
            <span className="text-white font-bold text-xl">TrustWall</span>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center md:text-left">
          <p>© {new Date().getFullYear()} TrustWall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
