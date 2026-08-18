import {
  BookOpen,
  Compass,
  Layers3,
  Target,
} from "lucide-react"

function ProblemSection() {
  const problems = [
    {
      icon: Compass,
      title: "Too many directions",
      description:
        "You find dozens of technologies, courses, and tutorials but don't know which one actually matters.",
    },
    {
      icon: BookOpen,
      title: "Endless tutorials",
      description:
        "Watching another tutorial feels productive, but without practice and projects, the knowledge rarely sticks.",
    },
    {
      icon: Layers3,
      title: "Scattered learning",
      description:
        "Your learning resources live across bookmarks, videos, courses, notes, and random GitHub repositories.",
    },
    {
      icon: Target,
      title: "No clear destination",
      description:
        "Without knowing what you're working toward, it's difficult to decide what to learn next.",
    },
  ]

  return (
    <section className="border-t border-white/10 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
              The problem
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Learning isn't hard.
              <span className="block text-white/35">
                Knowing what to learn is.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              The internet gives you unlimited information. SkillForge helps
              you turn that information into a focused path.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">

            {problems.map((problem) => {
              const Icon = problem.icon

              return (
                <div
                  key={problem.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10">
                    <Icon size={18} />
                  </div>

                  <h3 className="mt-6 font-medium">
                    {problem.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/35">
                    {problem.description}
                  </p>
                </div>
              )
            })}

          </div>

        </div>

      </div>
    </section>
  )
}

export default ProblemSection