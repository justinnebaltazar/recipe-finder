export const Download = () => {
  return (
    <div id="download" className="w-full bg-[#d9e7d3] py-16 sm:py-20 px-12 sm:px-20 md:px-25">
      <div className="max-w-5xl mx-auto px-10 sm:px-12 text-center bg-white rounded-2xl shadow-lg py-12">

        {/* title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Download the Recipe Finder App
        </h2>

        {/* description */}
        <p className="text-[#06402B] text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Install the Android APK to try the full Recipe Finder experience, including the Virtual Fridge, 
          recipe recommendations, and AI-powered recipe generation.
        </p>

        <a
          href="/recipe-finder/RecipeFinder.apk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-[#06402B] text-white text-lg sm:text-xl font-semibold shadow hover:shadow-xl hover:scale-[1.02] transition"
        >
          Download APK
        </a>

        {/* footnote */}
        <p className="mt-6 text-sm text-gray-500">
          Android devices only • Direct install • No login required
        </p>

      </div>
    </div>
  );
};
