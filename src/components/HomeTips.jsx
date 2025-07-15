
const tips = [
    {
        title: "Local insights.",
        description:
            "Highlight unique local knowledge, customs, eco-practices, and hidden spots for authentic regional insights.",
    },
    {
        title: "Sustainable practices.",
        description:
            "Discuss sustainable travel practices: minimize plastic, respect wildlife, choose eco-certified accommodations.",
    },
    {
        title: "Community stories.",
        description:
            "Feature stories and interviews highlight ecotourism's impact on local communities and the environment.",
    },
    {
        title: "Interactive maps.",
        description:
            "Use interactive maps to spotlight eco-friendly attractions, aiding effective travel planning.",
    },
    {
        title: "Traveler reviews.",
        description:
            "Include a section for eco-conscious travelers to share tips and experiences in reviews.",
    },
    {
        title: "Conservation initiatives.",
        description:
            "Highlight conservation efforts and visitor contributions through volunteer work, donations, or educational programs.",
    },
];
const HomeTips = () => {
    return (
        <section className="py-12 px-4 max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Green clicks: 6 essential tips for crafting an engaging <br />
                ecotourism blog.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tips.map((tip, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow p-6 text-left hover:shadow-lg transition"
                    >
                        <div className="text-2xl text-gray-400 mb-2">↘</div>
                        <h3 className="font-semibold text-lg">{tip.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{tip.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeTips;