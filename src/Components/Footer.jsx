function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Mogadhishu Store</h2>
          <p className="text-gray-400 mt-2">
            Quality fashion for everyone.
          </p>
        </div>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/shop" className="hover:text-gray-300">
            Shop
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>

        <div className="mt-4 md:mt-0 text-gray-400">
          <p>2026 Mogadhishu Store. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;