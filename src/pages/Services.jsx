export default function Services() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <p className="text-gray-600 dark:text-gray-300">
      We offer vending solutions tailored to your space...
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