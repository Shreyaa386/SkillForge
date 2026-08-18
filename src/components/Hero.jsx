import { ArrowRight, Check, Lock, Sparkles } from "lucide-react"

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            <Sparkles size={15} />
            Career learning, without the guesswork
          </div>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
            Stop guessing. Start building.
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Stop wondering
            <span className="block text-white/40">
              what to learn next.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/55">
            SkillForge turns your career goal into a clear learning
            roadmap, so you always know what to learn, practice, and
            build next.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button className="group flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-medium text-black transition hover:bg-white/90">
              Build my roadmap

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button className="rounded-full border border-white/10 px-6 py-3.5 font-medium text-white/70 transition hover:border-white/20 hover:text-white">
              See how it works
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/40">
            <span>✓ Goal-based learning</span>
            <span>✓ Structured roadmap</span>
            <span>✓ Project-focused</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-white/[0.03] blur-2xl" />

          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl backdrop-blur-xl sm:p-7">

            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                  Your roadmap
                </p>

                <h2 className="mt-2 text-xl font-semibold">
                  Full Stack Developer
                </h2>
              </div>

              <div className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50">
                72% complete
              </div>
            </div>

            <div className="space-y-3">

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black">
                  <Check size={17} />
                </div>

                <div>
                  <p className="font-medium">HTML & CSS</p>
                  <p className="mt-1 text-xs text-white/35">
                    Foundations
                  </p>
                </div>
              </div>

              <div className="ml-8 h-4 w-px bg-white/10" />

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black">
                  <Check size={17} />
                </div>

                <div>
                  <p className="font-medium">JavaScript</p>
                  <p className="mt-1 text-xs text-white/35">
                    Core programming
                  </p>
                </div>
              </div>

              <div className="ml-8 h-4 w-px bg-white/10" />

              <div className="rounded-2xl border border-white/20 bg-white/[0.08] p-4">

                <div className="flex items-center gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30">
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">React</p>
                      <span className="text-xs text-white/50">
                        72%
                      </span>
                    </div>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[72%] rounded-full bg-white" />
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2 text-xs text-white/40">
                  <span>✓ Components</span>
                  <span>✓ Props</span>
                  <span>✓ State</span>
                  <span>◉ Hooks</span>
                </div>
              </div>

              <div className="ml-8 h-4 w-px bg-white/10" />

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 opacity-60">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10">
                  <span className="text-white/40">○</span>
                </div>

                <div>
                  <p className="font-medium">Node.js</p>
                  <p className="mt-1 text-xs text-white/30">
                    Backend development
                  </p>
                </div>
              </div>

              <div className="ml-8 h-4 w-px bg-white/10" />

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 opacity-40">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10">
                  <Lock size={15} />
                </div>

                <div>
                  <p className="font-medium">Full Stack Projects</p>
                  <p className="mt-1 text-xs text-white/30">
                    Build your portfolio
                  </p>
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