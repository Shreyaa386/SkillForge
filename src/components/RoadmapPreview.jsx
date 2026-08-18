import { ArrowRight, Check, Lock, Play } from "lucide-react"
import roadmapData from "../data/roadmapData"

function RoadmapPreview() {
  return (
    <section
      id="roadmaps"
      className="border-t border-white/10 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
              Explore roadmaps
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Know where you're going.
              <span className="text-white/40"> Know what's next.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/50">
              Follow a structured sequence of skills instead of jumping
              between random tutorials and courses.
            </p>
          </div>

          <button className="group flex w-fit items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/70 transition hover:border-white/20 hover:text-white">
            Explore all roadmaps

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {roadmapData.map((roadmap) => (

            <div
              key={roadmap.id}
              className={`rounded-3xl border p-6 transition duration-300 ${
                roadmap.status === "current"
                  ? "border-white/20 bg-white/[0.06]"
                  : "border-white/10 bg-white/[0.025] hover:border-white/20"
              }`}
            >

              <div className="flex items-center justify-between">

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    roadmap.status === "completed"
                      ? "bg-white text-black"
                      : roadmap.status === "current"
                        ? "border border-white/30"
                        : "border border-white/10 text-white/30"
                  }`}
                >
                  {roadmap.status === "completed" && (
                    <Check size={17} />
                  )}

                  {roadmap.status === "current" && (
                    <Play size={15} />
                  )}

                  {roadmap.status === "locked" && (
                    <Lock size={15} />
                  )}
                </div>

                <span className="text-xs text-white/30">
                  {roadmap.duration}
                </span>

              </div>

              <h3 className="mt-7 text-xl font-semibold">
                {roadmap.title}
              </h3>

              <p className="mt-2 text-sm capitalize text-white/35">
                {roadmap.status === "completed"
                  ? "Completed"
                  : roadmap.status === "current"
                    ? "Currently learning"
                    : "Upcoming milestone"}
              </p>

              <div className="mt-7">

                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/35">
                    Progress
                  </span>

                  <span className="text-white/50">
                    {roadmap.progress}%
                  </span>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-white transition-all"
                    style={{ width: `${roadmap.progress}%` }}
                  />
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}

export default RoadmapPreview