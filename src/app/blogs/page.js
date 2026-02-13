"use client";

export default function BlogsPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6 text-center">
        Blogs
      </h1>

      <p className="text-gray-400 text-center max-w-xl text-lg">
        This page is cooking... 🍳<br />
        I’m preparing some awesome content on coding, ML, and full-stack development. Stay tuned!
      </p>
    </section>
  );
}
