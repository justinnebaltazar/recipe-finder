export const ShowAndTell2 = () => {
  return (
    <div className="w-full bg-[#06402B] py-12 sm:py-16 md:py-24">
      <div id="show-and-tell-2" className="max-w-7xl mx-auto px-4 sm:px-6">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#d9e7d3]">
          Show and Tell 2
        </h1>

        <p className="text-[#d9e7d3] mb-6 text-base sm:text-lg md:text-xl max-w-4xl">
          Improved UI, Updated MVVM Diagram, Threaded Design Diagram, Work Breakdown
        </p>

        {/* buttons / links */}
        <ul className="flex flex-wrap gap-4 mb-10">
          <li>
            <a href="/recipe-finder/RecipeFinder.apk" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-white shadow hover:shadow-md transition">
              Project APK
            </a>
          </li>
          <li>
            <a href="https://github.sfu.ca/jfb3/recipe-finder" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-white shadow hover:shadow-md transition">
              Source Code
            </a>
          </li>
          <li>
            <a href="/recipe-finder/updated-mvvm.png" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-white shadow hover:shadow-md transition">
              Updated MVVM Diagram
            </a>
          </li>
          <li>
            <a href="/recipe-finder/threaded-design-diagram.png" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-white shadow hover:shadow-md transition">
              Threaded Design Diagram
            </a>
          </li>
          {/* update presentation slides */}
          <li>
            <a href="/recipe-finder/recipe_finder_slides.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-white shadow hover:shadow-md transition">
              Presentation Slides
            </a>
          </li>
        </ul>

        {/* update link for show and tell 1 */}
        <div className="relative aspect-video w-full">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/DwQtCBHrcr8?si=JFinV_qzBfGzUys_"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
};
