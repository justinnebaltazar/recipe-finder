export const ProjectPitch = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 lg:px-8 my-12 ">
        <h1 className="text-2xl font-bold mb-2">Project Pitch</h1>
        <p className="text-[#06402B] mb-6">Our original idea for Recipe Finder!</p>

        <div className="relative aspect-video w-full">
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
