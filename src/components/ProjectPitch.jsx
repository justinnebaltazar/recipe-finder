export const ProjectPitch = () => {
  return (
    <div id="project-pitch" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900">
        Project Pitch
      </h1>


      <p className="text-[#06402B] mb-6 text-base sm:text-lg md:text-xl">
        Our original idea for Recipe Finder!
      </p>

      <div className="relative aspect-video w-full mt-8">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/acMp5X_yo6s?si=7LwDX7ESAeke1gZx"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  )
}