import { ArrowRight, Compass, Map, Rocket } from "lucide-react"

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-white/10 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
            How it works
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            From career goal to
            <span className="text-white/40"> clear next step.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
            SkillForge removes the guesswork by turning your destination
            into a structured path you can actually follow.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">

          {/* Step 01 */}

          <div className="group relative rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <Compass size={21} />
              </div>

              <span className="text-sm font-medium text-white/25">
                01
              </span>
            </div>

            <h3 className="mt-8 text-2xl font-semibold">
              Choose your goal
            </h3>

            <p className="mt-4 leading-7 text-white/45">
              Tell SkillForge where you want to go — frontend developer,
              backend developer, data scientist, or another career path.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wider text-white/30">
                Your goal
              </p>

              <div className="mt-3 flex items-center justify-between">
                <span className="font-medium">
                  Full Stack Developer
                </span>

                <span className="text-xs text-white/30">
                  Selected
                </span>
              </div>
            </div>
          </div>

          {/* Step 02 */}

          <div className="group relative rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <Map size={21} />
              </div>

              <span className="text-sm font-medium text-white/25">
                02
              </span>
            </div>

            <h3 className="mt-8 text-2xl font-semibold">
              Get your roadmap
            </h3>

            <p className="mt-4 leading-7 text-white/45">
              Get a structured sequence of skills and milestones so you
              always know what to learn next.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wider text-white/30">
                Next milestone
              </p>

              <div className="mt-3 flex items-center justify-between">
                <span className="font-medium">
                  React
                </span>

                <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-black">
                  72%
                </span>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[72%] rounded-full bg-white" />
              </div>
            </div>
          </div>

          {/* Step 03 */}

          <div className="group relative rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <Rocket size={21} />
              </div>

              <span className="text-sm font-medium text-white/25">
                03
              </span>
            </div>

            <h3 className="mt-8 text-2xl font-semibold">
              Learn, practice & build
            </h3>

            <p className="mt-4 leading-7 text-white/45">
              Turn every milestone into practical work and build projects
              that prove what you've learned.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wider text-white/30">
                Your progress
              </p>

              <div className="mt-3 flex items-center justify-between">
                <span className="font-medium">
                  8 milestones
                </span>

                <span className="text-sm text-white/40">
                  6 completed
                </span>
              </div>

              <div className="mt-3 flex gap-1.5">
                <span className="h-2 flex-1 rounded-full bg-white" />
                <span className="h-2 flex-1 rounded-full bg-white" />
                <span className="h-2 flex-1 rounded-full bg-white" />
                <span className="h-2 flex-1 rounded-full bg-white" />
                <span className="h-2 flex-1 rounded-full bg-white" />
                <span className="h-2 flex-1 rounded-full bg-white" />
                <span className="h-2 flex-1 rounded-full bg-white/10" />
                <span className="h-2 flex-1 rounded-full bg-white/10" />
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 flex items-center justify-center gap-3 text-sm text-white/30">
          <span>Goal</span>
          <ArrowRight size={15} />
          <span>Roadmap</span>
          <ArrowRight size={15} />
          <span>Skills</span>
          <ArrowRight size={15} />
          <span>Projects</span>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks