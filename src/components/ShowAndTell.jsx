export const ShowAndTell = () => {
  return (
    <div className="w-full bg-[#d9e7d3] py-12 sm:py-16 md:py-24">
      <div id="show-and-tell-1" className="max-w-7xl mx-auto px-4 sm:px-6">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-gray-900">
          Show and Tell 1
        </h1>

        <p className="text-[#06402B] mb-6 text-base sm:text-lg md:text-xl max-w-4xl">
          UI Mockup, MVVM Architecture, Work Breakdown, Plan for Show and Tell 2
        </p>

        {/* buttons / links */}
        <ul className="flex flex-wrap gap-4 mb-10">
          <li>
            <a href="https://github.sfu.ca/jfb3/recipe-finder" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-white shadow hover:shadow-md transition">
              Source Code
            </a>
          </li>
          <li>
            <a href="/MVVM.png" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-white shadow hover:shadow-md transition">
              MVVM Diagram
            </a>
          </li>
          <li>
            <a href="https://www.figma.com/design/suwwKM9EX4HdIAFImg5rF6/RecipeFinder-Mockup?node-id=0-1&t=lawQtfMAyrUWKaT1-1" target="_blank"  rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-white shadow hover:shadow-md transition">
              UI Mockup
            </a>
          </li>
          {/* update presentation slides */}
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-white shadow hover:shadow-md transition">
              Presentation Slides
            </a>
          </li>
        </ul>

        {/* update link for show and tell 1 */}
        <div className="relative aspect-video w-full">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/acMp5X_yo6s?si=7LwDX7ESAeke1gZx"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
};
