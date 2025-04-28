import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 bg-[#273248] dark:bg-slate-300 text-white dark:text-[#273248] px-6 py-10 rounded-t-lg">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-center">
        
        {/* Brand and Description */}
        <div>
          <h2 className="text-3xl font-bold mb-2">SportAxis</h2>
          <p className="max-w-md mx-auto text-sm md:text-base">
            SportAxis is your go-to store for high-quality sports equipment, offering a wide range of products to elevate your game and fuel your passion for sports.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium">
          <Link to="/" className="hover:underline hover:text-gray-300 transition">Home</Link>
          <Link to="/about" className="hover:underline hover:text-gray-300 transition">About Us</Link>
          <Link to="/auth/register" className="hover:underline hover:text-gray-300 transition">Contact</Link>
          <Link to="/allSports" className="hover:underline hover:text-gray-300 transition">All Sports Equipment</Link>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl">
          <a href="#" className="hover:scale-110 transition text-blue-500"><FaFacebook /></a>
          <a href="#" className="hover:scale-110 transition text-green-500"><FaWhatsapp /></a>
          <a href="#" className="hover:scale-110 transition text-blue-400"><FaTwitter /></a>
          <a href="#" className="hover:scale-110 transition text-red-500"><FaYoutube /></a>
          <a href="#" className="hover:scale-110 transition"><FcGoogle /></a>
        </div>

        {/* Footer Bottom */}
        <aside className="text-xs md:text-sm mt-4">
          <p>© {new Date().getFullYear()} SportAxis - All rights reserved.</p>
        </aside>

      </div>
    </footer>
  );
};

export default Footer;
