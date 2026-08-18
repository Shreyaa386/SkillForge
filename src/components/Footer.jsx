import {
  ArrowUpRight,
  Code2,
  Users,
  MessageCircle,
} from "lucide-react"

function Footer() {
  return (
    <footer className="border-t border-white/10">

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">

          <div>
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
                <span className="text-sm font-black">
                  S
                </span>
              </div>

              <span className="font-semibold">
                SkillForge
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/35">
              A clearer way to learn the skills that move your career
              forward.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium">
              Product
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="#product"
                className="block text-sm text-white/35 transition hover:text-white"
              >
                Product
              </a>

              <a
                href="#roadmaps"
                className="block text-sm text-white/35 transition hover:text-white"
              >
                Roadmaps
              </a>

              <a
                href="#how-it-works"
                className="block text-sm text-white/35 transition hover:text-white"
              >
                How it works
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">
              Resources
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="#"
                className="flex items-center gap-1 text-sm text-white/35 transition hover:text-white"
              >
                Documentation
                <ArrowUpRight size={13} />
              </a>

              <a
                href="#"
                className="flex items-center gap-1 text-sm text-white/35 transition hover:text-white"
              >
                Community
                <ArrowUpRight size={13} />
              </a>

              <a
                href="#"
                className="flex items-center gap-1 text-sm text-white/35 transition hover:text-white"
              >
                Help center
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">
              Connect
            </p>

            <div className="mt-5 flex items-center gap-3">

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-white/20 hover:text-white"
              >
                <Code2 size={16} />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-white/20 hover:text-white"
              >
                <Users size={16} />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-white/20 hover:text-white"
              >
                <MessageCircle size={16} />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 SkillForge. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="transition hover:text-white/60"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-white/60"
            >
              Terms
            </a>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer