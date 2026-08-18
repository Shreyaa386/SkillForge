import {
  ArrowRight,
  Compass,
  Hammer,
  Route,
} from "lucide-react"

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Compass,
      title: "Choose your goal",
      description:
        "Tell SkillForge what you want to become and where you want your learning journey to take you.",
    },
    {
      number: "02",
      icon: Route,
      title: "Get your roadmap",
      description:
        "Follow a structured sequence of skills that shows what to learn first and what comes next.",
    },
    {
      number: "03",
      icon: Hammer,
      title: "Learn by building",
      description:
        "Turn each milestone into practice and projects so you build real skills instead of only consuming content.",
    },
  ]

  return (
    <section
      id="how-it-works"
      className="border-t border-white/10 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
            How it works
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            From goal to
            <span className="text-white/35"> progress.</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
            SkillForge removes the guesswork and gives every learning step
            a reason.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-16">

          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div
                key={step.number}
                className="relative rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-7 lg:p-8"
              >
                <div className="flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10">
                    <Icon size={19} />
                  </div>

                  <span className="text-xs font-medium text-white/25">
                    {step.number}
                  </span>

                </div>

                <h3 className="mt-8 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/35">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <ArrowRight
                    size={18}
                    className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-white/20 md:block"
                  />
                )}

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default HowItWorks