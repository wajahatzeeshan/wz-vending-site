export default function Services() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold mb-6 text-blue-700">Our Services</h2>
      <p className="text-lg text-gray-600 max-w-2xl mb-10">
        Whether you're outfitting a corporate lounge, school campus, gym, or retail space —
        we tailor vending solutions that deliver convenience, freshness, and satisfaction.
      </p>

      <div className="grid gap-8 md:grid-cols-3 w-full max-w-6xl">
        {[
          {
            title: "Snack & Beverage Machines",
            icon: "🧃",
            desc: "Popular combos of snacks and chilled drinks — customizable layouts and brand options.",
          },
          {
            title: "Healthy Options",
            icon: "🥗",
            desc: "Fruit, protein bars, and nutritious picks curated to promote wellness at work or on-the-go.",
          },
          {
            title: "Cashless Payment",
            icon: "💳",
            desc: "Support for contactless cards, mobile wallets, and QR-code payments — fast and secure.",
          },
          {
            title: "Realtime Monitoring",
            icon: "📊",
            desc: "Smart tracking alerts us to refills, power status, and usage — ensuring zero downtime.",
          },
          {
            title: "Machine Placement & Setup",
            icon: "🚚",
            desc: "Delivered and installed by professionals with tailored positioning advice for peak engagement.",
          },
          {
            title: "Maintenance & Support",
            icon: "🛠️",
            desc: "Prompt technical support, proactive servicing, and hygiene checks — all included.",
          },
        ].map(({ title, icon, desc }) => (
          <div
            key={title}
            className="bg-white p-6 rounded-xl shadow-sm text-left border-t-4 border-blue-100 hover:border-blue-400 transition"
          >
            <h3 className="text-xl font-bold mb-2 text-blue-700">
              {icon} {title}
            </h3>
            <p className="text-gray-700 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}