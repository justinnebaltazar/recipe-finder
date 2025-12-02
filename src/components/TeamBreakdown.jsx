export const TeamBreakdown = () => {
  const team = [
    {
      name: "Justinne",
      role: "UI & Developer",
      contributions: [
        "UI Mockups",
        "Fragments & Layouts",
        "Threaded Design Diagram", 
        "Virtual Fridge Room Database",
        "Website Implementation + Management"
      ],
    },
    {
      name: "Mark",
      role: "Backend Developer",
      contributions: [
        "Database schema",
        "MVVM Diagram",
        "FastAPI + Gemini API Integration",
        "Recipe Generation (Image + Text)",
      ],
    },
    {
      name: "Brian",
      role: "Developer",
      contributions: [
        "Show and Tell 2 Video",
        "Final Presentation Video",
        "Firestore Setup + Authentication",
        "Explore Page - Shared Recipes",
        "Login + Sign Up Fragments"
      ],
    },
        {
      name: "Kevin",
      role: "Architecture",
      contributions: [
        "MVVM Diagram",
        "Show and Tell 1 Video",
      ],
    },
    {
      name: "Yan Ting",
      role: "Developer",
      contributions: [
        "Recipe Repository",
        "Recipe ViewModel"
      ],
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16 md:py-24 bg-[#d9e7d3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#06402B]] mb-4">
            Team Effort Breakdown
          </h1>
          <p className="text-[#06402B]] text-lg sm:text-xl max-w-2xl mx-auto">
            A collaborative effort bringing the Recipe Finder project to life
          </p>
        </div>

        {/* Team Cards */}
        <div className="flex flex-wrap gap-8 justify-center">
          {team.map((member, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* header with gradient */}
              <div className="bg-linear-to-br from-[#06402B] to-[#0a5a3d] p-6 text-white">
                <h2 className="text-2xl font-bold mb-1">
                  {member.name}
                </h2>
                <p className="text-sm text-white/80 font-medium">
                  {member.role}
                </p>
              </div>

              {/* contributions */}
              <div className="p-6 bg-[#f8faf7] grow">
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                  Contributions
                </h3>
                <div className="space-y-2">
                  {member.contributions.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#06402B] mt-2 shrink-0"></span>
                      <span className="text-gray-800 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

