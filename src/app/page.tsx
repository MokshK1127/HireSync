"use client";

import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  Video,
  Code2,
  Calendar,
  Clock,
  Zap,
  Shield,
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  CodeIcon,
} from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

export default function LandingPage() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/home");
    }
  }, [isLoaded, isSignedIn, router]);

  // Show nothing while checking auth status
  if (!isLoaded) {
    return null;
  }

  // Don't render landing page if user is signed in (redirect will happen)
  if (isSignedIn) {
    return null;
  }

  const features = [
    {
      icon: Video,
      title: "HD Video Interviews",
      description:
        "Crystal-clear video calls with screen sharing capabilities for seamless remote technical interviews.",
      gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    },
    {
      icon: Code2,
      title: "Live Code Editor",
      description:
        "Real-time collaborative coding environment supporting JavaScript, Python, and Java.",
      gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "Effortlessly schedule interviews with intelligent time slot management and calendar integration.",
      gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
    },
    {
      icon: Clock,
      title: "Interview Recordings",
      description:
        "Automatically record sessions for later review and candidate evaluation.",
      gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
    },
    {
      icon: Zap,
      title: "Instant Start",
      description:
        "Launch interviews immediately or join via invitation links in seconds.",
      gradient: "from-yellow-500/10 via-yellow-500/5 to-transparent",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security with end-to-end encryption for all interview data.",
      gradient: "from-red-500/10 via-red-500/5 to-transparent",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description: "Sign up as an interviewer or candidate in seconds",
    },
    {
      number: "02",
      title: "Schedule or Join",
      description: "Set up interviews or join via invitation link",
    },
    {
      number: "03",
      title: "Conduct Interview",
      description: "Use video, code editor, and collaboration tools",
    },
    {
      number: "04",
      title: "Review & Decide",
      description: "Access recordings and make informed hiring decisions",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Mode Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

        <div className="relative container max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-32">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                The Future of Technical Hiring
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Technical Interviews,
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Reimagined
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conduct seamless remote technical interviews with HD video, live
              coding, and intelligent scheduling. All in one powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <SignUpButton mode="modal">
                <Button
                  size="lg"
                  className="text-lg px-8 h-14 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg shadow-emerald-500/25"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </SignUpButton>

              <SignInButton mode="modal">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 h-14 border-2"
                >
                  Sign In
                </Button>
              </SignInButton>
            </div>
            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Free to start</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Everything You Need,
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                {" "}
                Nothing You Don't
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to streamline your technical hiring
              process
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="relative overflow-hidden p-6 border-2 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Start Interviewing in
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                {" "}
                Four Simple Steps
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From signup to your first interview in minutes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="space-y-4">
                  <div className="relative">
                    <div className="text-7xl font-bold bg-gradient-to-br from-emerald-600/20 to-teal-500/20 bg-clip-text text-transparent">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24">
        <div className="container max-w-4xl mx-auto px-6">
          <Card className="relative overflow-hidden border-2 border-emerald-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-transparent" />
            <div className="relative p-12 text-center space-y-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Transform Your
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  Technical Hiring?
                </span>
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of companies already conducting better technical
                interviews with HireSync
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <SignUpButton mode="modal">
                  <Button
                    size="lg"
                    className="text-lg px-8 h-14 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg shadow-emerald-500/25"
                  >
                    Start Free Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </SignUpButton>

                <SignInButton mode="modal">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 h-14 border-2"
                  >
                    Sign In
                  </Button>
                </SignInButton>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <CodeIcon className="size-8 text-emerald-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                HireSync
              </span>
            </div>

            <div className="text-sm text-muted-foreground">
              © 2025 HireSync. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
