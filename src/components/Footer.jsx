export default function Footer() {
  return (
    <footer className="bg-black text-center py-6 border-t border-gray-800">
      <p className="text-gray-500">
        © {new Date().getFullYear()} Vivek. All rights reserved.
      </p>
    </footer>
  );
}
