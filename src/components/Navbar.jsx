import { ArrowRight, Menu } from "lucide-react"

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#09090B]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
            <span className="text-sm font-black">S</span>
          </div>

          <span className="text-lg font-semibold tracking-tight">
            SkillForge
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#product"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Product
          </a>

          <a
            href="#how-it-works"
            className="text-sm text-white/60 transition hover:text-white"
          >
            How it works
          </a>

          <a
            href="#roadmaps"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Roadmaps
          </a>
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <button className="text-sm text-white/70 transition hover:text-white">
            Log in
          </button>

          <button className="group flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90">
            Build my roadmap

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 md:hidden">
          <Menu size={20} />
        </button>

      </nav>
    </header>
  )
}

export default Navbar