import { ArrowRight, Play } from "lucide-react"

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32">

      <div className="absolute left-1/2 top-20 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/50">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Learn with direction. Build with confidence.
          </div>

          <h1 className="mt-7 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
            Stop learning
            <span className="block text-white/35">
              without a plan.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
            SkillForge turns your career goal into a clear learning
            roadmap, so you always know what to learn, what to practice,
            and what to build next.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <a
              href="#roadmaps"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black transition hover:bg-white/90 sm:w-auto"
            >
              Build my roadmap

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-3.5 font-medium text-white/70 transition hover:border-white/20 hover:text-white sm:w-auto"
            >
              <Play size={16} />
              See how it works
            </a>

          </div>

        </div>

        {/* Hero preview */}

        <div className="mx-auto mt-16 max-w-5xl sm:mt-20">

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] shadow-2xl sm:rounded-3xl">

            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 sm:px-6 sm:py-4">

              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

              <div className="ml-3 hidden h-7 flex-1 rounded-lg border border-white/10 bg-white/[0.02] sm:block" />

            </div>

            <div className="grid md:grid-cols-[220px_1fr]">

              {/* Sidebar */}

              <div className="hidden border-r border-white/10 p-5 md:block">

                <div className="text-xs uppercase tracking-[0.2em] text-white/25">
                  Your roadmap
                </div>

                <div className="mt-5 space-y-2">

                  <div className="rounded-xl bg-white/[0.08] px-3 py-2.5 text-sm text-white">
                    Overview
                  </div>

                  <div className="rounded-xl px-3 py-2.5 text-sm text-white/35">
                    Fundamentals
                  </div>

                  <div className="rounded-xl px-3 py-2.5 text-sm text-white/35">
                    React
                  </div>

                  <div className="rounded-xl px-3 py-2.5 text-sm text-white/35">
                    Backend
                  </div>

                  <div className="rounded-xl px-3 py-2.5 text-sm text-white/35">
                    Projects
                  </div>

                </div>

              </div>

              {/* Dashboard */}

              <div className="p-5 sm:p-7 lg:p-9">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                      Current roadmap
                    </p>

                    <h2 className="mt-2 text-xl font-semibold sm:text-2xl">
                      Full Stack Developer
                    </h2>
                  </div>

                  <div className="w-fit rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40">
                    72% complete
                  </div>

                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/30">
                        Completed
                      </span>

                      <span className="text-sm">
                        4
                      </span>
                    </div>

                    <div className="mt-4 h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-full rounded-full bg-white" />
                    </div>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/30">
                        In progress
                      </span>

                      <span className="text-sm">
                        1
                      </span>
                    </div>

                    <div className="mt-4 h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-[72%] rounded-full bg-white" />
                    </div>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/30">
                        Upcoming
                      </span>

                      <span className="text-sm">
                        2
                      </span>
                    </div>

                    <div className="mt-4 h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-[25%] rounded-full bg-white/40" />
                    </div>

                  </div>

                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5">

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                      <p className="text-xs text-white/30">
                        Current milestone
                      </p>

                      <h3 className="mt-1 font-medium">
                        React Fundamentals
                      </h3>
                    </div>

                    <span className="w-fit rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black">
                      72%
                    </span>

                  </div>

                  <div className="mt-5 h-2 rounded-full bg-white/10">
                    <div className="h-full w-[72%] rounded-full bg-white" />
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">

                    <div className="rounded-xl border border-white/10 px-3 py-3">
                      <p className="text-xs text-white/30">
                        Components
                      </p>
                      <p className="mt-2 text-xs">
                        Complete
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 px-3 py-3">
                      <p className="text-xs text-white/30">
                        Props
                      </p>
                      <p className="mt-2 text-xs">
                        Complete
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 px-3 py-3">
                      <p className="text-xs text-white/30">
                        State
                      </p>
                      <p className="mt-2 text-xs">
                        Complete
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 px-3 py-3">
                      <p className="text-xs text-white/30">
                        Hooks
                      </p>
                      <p className="mt-2 text-xs text-white/40">
                        Learning
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
  )
}

export default Hero