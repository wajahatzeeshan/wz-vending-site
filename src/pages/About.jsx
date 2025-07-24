export default function About() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold mb-6 text-blue-700">About Us</h2>

      <p className="text-lg max-w-3xl mb-6">
        At Zaroon Vending, we believe convenience shouldn't compromise quality.
        With a focus on fresh products, smart machines, and rapid service,
        we’re redefining how vending fits into modern lifestyles.
      </p>

      <div className="grid gap-8 md:grid-cols-3 mt-6 w-full max-w-5xl">
        {[
          {
            title: "Fresh Selection",
            desc: "From snacks to wellness essentials, our curated inventory keeps your teams energized.",
            emoji: "🍏",
          },
          {
            title: "Smart Tech",
            desc: "Our machines are connected, cashless, and intuitive — built for today's workplace.",
            emoji: "🤖",
          },
          {
            title: "Fast Refills",
            desc: "We monitor inventory 24/7, ensuring your machines stay stocked and spotless.",
            emoji: "⚡",
          },
        ].map(({ title, desc, emoji }) => (
          <div
            key={title}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm text-left"
          >
            <h3 className="text-xl font-semibold mb-2">
              {emoji} {title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}