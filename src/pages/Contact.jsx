export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12 flex flex-col items-center text-center">
  <h2 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">Get in Touch</h2>
  <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-xl">
    We'd love to hear from you — drop us a message and we’ll get back soon.
  </p>


      {/* Contact Form */}
      <form
  action="https://formspree.io/f/xkgzbzro" // <-- replace with your actual Formspree endpoint
  method="POST"
  
  className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 w-full max-w-md text-left space-y-4"
>
  <div class="g-recaptcha" data-sitekey="6LcbO5IrAAAAAGfp3BQtdYxUlKfRp4Pgz-DOatb9"></div>
  
  {/* This field should be hidden from users but will catch spam bots */} 
  <input type="text" name="_gotcha" style={{ display: "none" }} />

  <div>
    <label
      htmlFor="name"
      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
    >
      Name
    </label>
    <input
      id="name"
      name="name"
      type="text"
      required
      className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div>
    <label
      htmlFor="email"
      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
    >
      Email
    </label>
    <input
      id="email"
      name="email"
      type="email"
      required
      className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div>
    <label
      htmlFor="message"
      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
    >
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows="4"
      required
      className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
  >
    Send Message
  </button>
</form>

      {/* Additional Contact Info */}
      <div className="mt-12 text-gray-700 text-sm space-y-2">
        <p>📧 Email: support@zaroonvending.com</p>
        <p>📞 Phone: +44 7951254114</p>
        <p>📍 Location: London, UK</p>
      </div>
    </section>
  );
}