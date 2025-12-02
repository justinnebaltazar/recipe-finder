import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setOpenNav(false)
        }
      }
        
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])

    const scrollToSection = (hash) => {
      const id = hash.replace("#", "")
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }

  const handleNavClick = (path) => {
    // CASE 1: home sections (scroll targets)
    if (path.startsWith("#") && !path.startsWith("#/")) {
      if (location.pathname !== "/") {
        navigate("/")  // go home first

        // wait for home to mount, then scroll
        setTimeout(() => {
          scrollToSection(path)
        }, 300)
      } else {
        scrollToSection(path)
      }
    }

    // CASE 2: Real route navigation (milestones)
    else {
      navigate(path.replace("#", ""))
    }

    setOpenNav(false)
  }

    const navLinks = [
      { name: "Project Pitch", path: "#project-pitch" },
      { name: "Download", path: "#download" },
      { name: "Previous Milestones", path: "#/project-milestones" }
    ]

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        
        {/* project title */}
        <p className="font-semibold text-lg">
          <a href="#/">Recipe Finder</a>
        </p>
    
        <button 
          className="lg:hidden text-2xl"
          onClick={() => setOpenNav(!openNav)}
        >
          ☰
        </button>

        {/* desktop links */}
        <ul className="hidden lg:flex flex-row items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                className="hover:underline"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.path)
                }}
              >
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
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.path)
                  }}
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
