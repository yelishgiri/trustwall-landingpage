"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DemoVideo() {
  const [videoUrl, setVideoUrl] = useState("")

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">See TrustWall in Action</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Watch how TrustWall protects your sensitive information in real-time
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-slate-200 rounded-xl overflow-hidden border border-slate-300">
            {videoUrl ? (
              <iframe
                src={videoUrl}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-white">
                <div className="mb-4">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Play className="h-10 w-10 text-emerald-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Demo Video Coming Soon</h3>
                <p className="text-slate-400 max-w-md text-center mb-6">
                  Our team is currently preparing a demonstration of TrustWalls powerful privacy protection features.
                </p>
                <div className="text-xs text-slate-500">This space is reserved for the product demo video</div>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Request a Live Demo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
