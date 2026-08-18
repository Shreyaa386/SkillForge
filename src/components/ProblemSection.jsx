import { ArrowDown, ArrowRight, Check, X } from "lucide-react"

function ProblemSection() {
  return (
    <section className="border-t border-white/10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
            The problem
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Learning shouldn't feel
            <span className="text-white/40"> this confusing.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/50">
            The internet gives you endless resources. What it doesn't give
            you is a clear answer to what you should learn next.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">

          {/* Without SkillForge */}

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9">

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
                <X size={18} className="text-white/50" />
              </div>

              <div>
                <p className="text-sm text-white/40">
                  Without SkillForge
                </p>

                <h3 className="mt-1 text-xl font-semibold">
                  The learning maze
                </h3>
              </div>
            </div>

            <div className="mt-10 space-y-2">

              <div className="rounded-2xl border border-white/10 p-5">
                <p className="font-medium">100+ tutorials</p>
                <p className="mt-1 text-sm text-white/35">
                  Too many places to start.
                </p>
              </div>

              <div className="flex justify-center py-1">
                <ArrowDown size={16} className="text-white/20" />
              </div>

              <div className="rounded-2xl border border-white/10 p-5">
                <p className="font-medium">Conflicting advice</p>
                <p className="mt-1 text-sm text-white/35">
                  Everyone recommends something different.
                </p>
              </div>

              <div className="flex justify-center py-1">
                <ArrowDown size={16} className="text-white/20" />
              </div>

              <div className="rounded-2xl border border-white/10 p-5">
                <p className="font-medium">Random learning</p>
                <p className="mt-1 text-sm text-white/35">
                  You keep switching between topics.
                </p>
              </div>

              <div className="flex justify-center py-1">
                <ArrowDown size={16} className="text-white/20" />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-medium text-white/60">
                  "What should I learn next?"
                </p>
                <p className="mt-1 text-sm text-white/30">
                  The question keeps coming back.
                </p>
              </div>

            </div>
          </div>

          {/* With SkillForge */}

          <div className="rounded-3xl border border-white/20 bg-white/[0.045] p-7 sm:p-9">

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                <Check size={18} />
              </div>

              <div>
                <p className="text-sm text-white/50">
                  With SkillForge
                </p>

                <h3 className="mt-1 text-xl font-semibold">
                  A clear path forward
                </h3>
              </div>
            </div>

            <div className="mt-10 space-y-2">

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <p className="font-medium">Choose your goal</p>
                <p className="mt-1 text-sm text-white/35">
                  Start with the career you want.
                </p>
              </div>

              <div className="flex justify-center py-1">
                <ArrowDown size={16} className="text-white/30" />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <p className="font-medium">Get your roadmap</p>
                <p className="mt-1 text-sm text-white/35">
                  Know exactly which skills come next.
                </p>
              </div>

              <div className="flex justify-center py-1">
                <ArrowDown size={16} className="text-white/30" />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <p className="font-medium">Practice & build</p>
                <p className="mt-1 text-sm text-white/35">
                  Turn knowledge into practical projects.
                </p>
              </div>

              <div className="flex justify-center py-1">
                <ArrowDown size={16} className="text-white/30" />
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/[0.08] p-5">
                <div>
                  <p className="font-medium">Make measurable progress</p>
                  <p className="mt-1 text-sm text-white/35">
                    Always know your next milestone.
                  </p>
                </div>

                <ArrowRight
                  size={20}
                  className="shrink-0 text-white/50"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ProblemSection