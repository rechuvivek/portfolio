export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-blue-500 mb-6">
        Contact Me
      </h2>
      <p className="text-gray-400 mb-8">
        Feel free to reach out for collaborations or job opportunities.
      </p>
      <a
        href="mailto:your-email@example.com"
        className="bg-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
      >
        Send Email
      </a>
    </section>
  );
}
