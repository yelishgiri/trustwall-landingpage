"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { storeLetterToCloud } from "@/app/actions"

export function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(event.target)

    try {
      const result = await storeLetterToCloud(formData)
      if (result.success) {
        setIsSuccess(true)
        event.target.reset()
      } else {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-white" id="signup">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Get Early Access</h2>
            <p className="mt-4 text-lg text-slate-600">
              Sign up to be among the first to try TrustWall and receive a personalized letter of intent.
            </p>
          </div>

          {isSuccess ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">Thank You!</h3>
              <p className="text-emerald-600">
                Your letter of intent has been generated and sent. We'll be in touch soon with more information about
                TrustWall.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-50 rounded-xl border border-slate-200 p-6 md:p-8">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" required className="h-12" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="h-12"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="organization">Organization (Optional)</Label>
                  <Input id="organization" name="organization" placeholder="Your Company" className="h-12" />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-600 text-sm">{error}</div>
                )}

                <Button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white h-12 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Generate Letter of Intent"}
                </Button>

                <p className="text-sm text-slate-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
