import { ArrowRight, Sparkles } from "lucide-react"

function CTA() {
  return (
    <section className="border-t border-white/10 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] px-6 py-16 text-center sm:px-12 lg:px-20 lg:py-20">

          <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
            <Sparkles size={20} />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
            Ready to start?
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Your next step is clearer
            <span className="block text-white/40">
              than you think.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Stop collecting tutorials. Start following a path designed
            around where you actually want to go.
          </p>

          <button className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black transition hover:bg-white/90">
            Build my roadmap

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          <p className="mt-5 text-xs text-white/25">
            Start with your goal. Figure out the rest one step at a time.
          </p>

        </div>

      </div>
    </section>
  )
}

export default CTA