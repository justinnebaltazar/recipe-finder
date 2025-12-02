export const FinalPresentation = () => {
  return (
    <div className="w-full bg-white py-12 sm:py-16 md:py-24">
      <div id="final-presentation" className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#1e420e]">
          Final Presentation
        </h1>
        <p className="text-[#1e420e] mb-6 text-base sm:text-lg md:text-xl max-w-4xl">
          Complete Recipe Finder application with all features implemented
        </p>
        
        {/* buttons / links */}
        <ul className="flex flex-wrap gap-4 mb-10">
          <li>
            <a 
              href="/recipe-finder/RecipeFinder.apk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-lg text-white bg-[#06402B] shadow hover:shadow-md transition"
            >
              Project APK
            </a>
          </li>
          <li>
            <a 
              href="/recipe-finder/RecipeFinder.zip" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-lg text-white bg-[#06402B] shadow hover:shadow-md transition"
            >
              Code (ZIP File)
            </a>
          </li>
          <li>
            <a 
              href="https://github.sfu.ca/jfb3/recipe-finder" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-lg text-white bg-[#06402B] shadow hover:shadow-md transition"
            >
              Source Code
            </a>
          </li>
          <li>
            <a 
              href="/recipe-finder/updated-mvvm.png" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-lg text-white bg-[#06402B] shadow hover:shadow-md transition"
            >
              Final MVVM Diagram
            </a>
          </li>
          <li>
            <a 
              href="/recipe-finder/threaded-design-diagram.png" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-lg text-white bg-[#06402B] shadow hover:shadow-md transition"
            >
              Final Threaded Design
            </a>
          </li>
          <li>
            <a 
              href="/recipe-finder/recipe_finder_final.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-lg text-white bg-[#06402B] shadow hover:shadow-md transition"
            >
              Presentation Slides
            </a>
          </li>
        </ul>
        
        {/* video */}
        <div className="relative aspect-video w-full">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/sjmdLYCOLS4?si=c9R353Yz9PyfH0bl"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};