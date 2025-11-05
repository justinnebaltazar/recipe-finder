import { useEffect, useState } from "react"

export const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setOpenNav(false)
            }
        }
        
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const navLinks = [
      { name: "Project Pitch", path: "#project-pitch" },
      { name: "Show and Tell 1", path: "#show-and-tell-1" }
    ]

    return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        
        {/* project title */}
        <p className="font-semibold text-lg">Recipe Finder</p>
    
        <button 
          className="lg:hidden text-2xl"
          onClick={() => setOpenNav(!openNav)}>
          ☰
        </button>

        {/* desktop links */}
        <ul className="hidden lg:flex flex-row items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.path} className="hover:underline">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile dropdown menu */}
      {openNav && (
        <div className="lg:hidden px-4 py-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.path}
                  className="block hover:underline"
                  onClick={() => setOpenNav(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
