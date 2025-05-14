import { Shield, Lock, Eye, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
          <div className="flex items-center justify-center bg-slate-700 p-3 rounded-full">
            <Shield className="h-8 w-8 text-emerald-400" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-emerald-400">Trust</span>Wall
          </h1>

          <p className="text-xl md:text-2xl text-slate-300">
            Protect your sensitive information while using AI chatbots
          </p>

          <p className="text-slate-400 max-w-2xl">
            TrustWall is a Chrome extension that automatically redacts your
            personal and sensitive information when interacting with AI
            chatbots, starting with DeepSeek integration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#signup"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white text-base sm:text-lg font-medium px-6 py-3 rounded-lg"
            >
              Get Early Access
            </a>
          </div>

          <div className="text-center pt-4">
            <h3 className="text-lg font-semibold text-slate-300 mb-1">
              Meet the Founders
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-emerald-400">
              <a
                href="https://www.linkedin.com/in/pappujha2004/"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
                Pappu Jha
              </a>
              <a
                href="https://www.linkedin.com/in/rabindra-giri-05125b242/"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
                Rabindra Giri
              </a>
            </div>
          </div>

          <div className="pt-8 flex items-center justify-center">
            <div className="relative w-full max-w-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-slate-800 border border-slate-700 rounded-lg shadow-xl overflow-hidden">
                <div className="p-2 bg-slate-900 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-slate-400 flex-1 text-center">
                    DeepSeek Chat
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex gap-4 mb-4">
                    <div className="bg-slate-700 p-3 rounded-full">
                      <Lock className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div className="flex-1 bg-slate-700 p-3 rounded-lg">
                      <p className="text-sm text-slate-300">
                        My name is{" "}
                        <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">
                          REDACTED
                        </span>{" "}
                        and my email is{" "}
                        <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">
                          REDACTED
                        </span>
                        . Can you help me with this project?
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-slate-700 p-3 rounded-full">
                      <Eye className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="flex-1 bg-slate-700 p-3 rounded-lg">
                      <p className="text-sm text-slate-300">
                        I'd be happy to help you with your project! I don't need
                        your personal information to assist you. What kind of
                        project are you working on?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
