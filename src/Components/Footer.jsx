import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Muscab  Store</h2>
          <p className="text-gray-400 leading-7">
            Your destination for modern fashion and quality clothing at
            affordable prices.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white duration-300">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white duration-300">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Help Center</li>
            <li>Shipping Information</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="space-y-2 text-gray-400">
            <p>Mogadishu, Somalia</p>
            <p>+252 614 48 56 53</p>
            <p>support@Muscab store.com</p>
          </div>
        </div>

      </div>

    </footer>
  );
}

export default Footer;