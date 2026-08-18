import { Menu, X } from "lucide-react"
import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#09090b]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

        <a
          href="#"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
            <span className="text-sm font-black">
              S
            </span>
          </div>

          <span className="font-semibold">
            SkillForge
          </span>
        </a>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#product"
            className="text-sm text-white/50 transition hover:text-white"
          >
            Product
          </a>

          <a
            href="#how-it-works"
            className="text-sm text-white/50 transition hover:text-white"
          >
            How it works
          </a>

          <a
            href="#roadmaps"
            className="text-sm text-white/50 transition hover:text-white"
          >
            Roadmaps
          </a>

        </div>

        <a
          href="#roadmaps"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90 md:inline-flex"
        >
          Get started
        </a>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/20 hover:text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>

      </nav>

      {/* Mobile Navigation */}

      {isOpen && (
        <div className="border-t border-white/10 bg-[#09090b] px-6 py-5 md:hidden">

          <div className="flex flex-col gap-2">

            <a
              href="#product"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm text-white/60 transition hover:bg-white/[0.05] hover:text-white"
            >
              Product
            </a>

            <a
              href="#how-it-works"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm text-white/60 transition hover:bg-white/[0.05] hover:text-white"
            >
              How it works
            </a>

            <a
              href="#roadmaps"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm text-white/60 transition hover:bg-white/[0.05] hover:text-white"
            >
              Roadmaps
            </a>

            <a
              href="#roadmaps"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-black transition hover:bg-white/90"
            >
              Get started
            </a>

          </div>

        </div>
      )}

    </header>
  )
}

export default Navbar