export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Alex Morgan Photography. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
