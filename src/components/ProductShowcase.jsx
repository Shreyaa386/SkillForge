import {
  BarChart3,
  BookOpen,
  Check,
  Clock3,
  Code2,
  Lock,
  Play,
  Trophy,
} from "lucide-react"

function ProductShowcase() {
  return (
    <section
      id="product"
      className="border-t border-white/10 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
            Inside SkillForge
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Everything you need to
            <span className="text-white/40"> keep moving.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/50">
            One place to understand your roadmap, track progress, practice
            skills, and turn learning into real projects.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] shadow-2xl">

          {/* Dashboard header */}

          <div className="flex flex-col gap-5 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                Learning dashboard
              </p>

              <h3 className="mt-1 text-lg font-semibold">
                Full Stack Developer
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45">
                12 week roadmap
              </div>

              <div className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black">
                72% complete
              </div>
            </div>

          </div>

          <div className="grid lg:grid-cols-[1fr_320px]">

            {/* Main roadmap */}

            <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">
                    Your learning path
                  </p>

                  <p className="mt-1 text-sm text-white/35">
                    6 milestones · 4 completed
                  </p>
                </div>

                <BarChart3 size={20} className="text-white/30" />
              </div>

              <div className="mt-8 space-y-3">

                {/* Completed */}

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black">
                    <Check size={17} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-medium">
                        HTML & CSS
                      </p>

                      <span className="text-xs text-white/30">
                        Completed
                      </span>
                    </div>

                    <div className="mt-2 h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-full rounded-full bg-white" />
                    </div>
                  </div>
                </div>

                {/* Completed */}

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black">
                    <Check size={17} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-medium">
                        JavaScript
                      </p>

                      <span className="text-xs text-white/30">
                        Completed
                      </span>
                    </div>

                    <div className="mt-2 h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-full rounded-full bg-white" />
                    </div>
                  </div>
                </div>

                {/* Current */}

                <div className="rounded-2xl border border-white/20 bg-white/[0.07] p-5">

                  <div className="flex items-center gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30">
                      <Code2 size={17} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <p className="font-medium">
                            React
                          </p>

                          <p className="mt-1 text-xs text-white/35">
                            Current milestone
                          </p>
                        </div>

                        <span className="text-sm font-medium">
                          72%
                        </span>
                      </div>

                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[72%] rounded-full bg-white" />
                      </div>
                    </div>

                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    <div className="rounded-xl border border-white/10 px-3 py-2">
                      <p className="text-xs text-white/30">Components</p>
                      <Check size={13} className="mt-2" />
                    </div>

                    <div className="rounded-xl border border-white/10 px-3 py-2">
                      <p className="text-xs text-white/30">Props</p>
                      <Check size={13} className="mt-2" />
                    </div>

                    <div className="rounded-xl border border-white/10 px-3 py-2">
                      <p className="text-xs text-white/30">State</p>
                      <Check size={13} className="mt-2" />
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2">
                      <p className="text-xs text-white/30">Hooks</p>
                      <span className="mt-2 block h-3 w-3 rounded-full border border-white/40" />
                    </div>
                  </div>

                </div>

                {/* Locked */}

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.015] p-4 opacity-50">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10">
                    <Lock size={16} />
                  </div>

                  <div className="flex-1">
                    <p className="font-medium">
                      Node.js
                    </p>

                    <p className="mt-1 text-xs text-white/30">
                      Unlock after React
                    </p>
                  </div>

                </div>

                {/* Locked */}

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.015] p-4 opacity-35">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10">
                    <Lock size={16} />
                  </div>

                  <div className="flex-1">
                    <p className="font-medium">
                      MongoDB
                    </p>

                    <p className="mt-1 text-xs text-white/30">
                      Upcoming milestone
                    </p>
                  </div>

                </div>

              </div>
            </div>

            {/* Sidebar */}

            <aside className="p-6 sm:p-8">

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  This week
                </p>

                <h3 className="mt-2 text-lg font-semibold">
                  Your focus
                </h3>
              </div>

              <div className="mt-6 space-y-3">

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black">
                      <BookOpen size={16} />
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        Learn
                      </p>

                      <p className="text-xs text-white/30">
                        React Hooks
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10">
                      <Play size={16} />
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        Practice
                      </p>

                      <p className="text-xs text-white/30">
                        Build a task manager
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10">
                      <Trophy size={16} />
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        Milestone
                      </p>

                      <p className="text-xs text-white/30">
                        Complete React
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/45">
                    Weekly progress
                  </span>

                  <span className="text-sm font-medium">
                    68%
                  </span>
                </div>

                <div className="mt-4 h-2 rounded-full bg-white/10">
                  <div className="h-full w-[68%] rounded-full bg-white" />
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-white/30">
                  <Clock3 size={13} />
                  4h 20m learning time
                </div>
              </div>

            </aside>

          </div>
        </div>

      </div>
    </section>
  )
}

export default ProductShowcase