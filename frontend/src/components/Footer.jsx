import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-500  text-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Social */}
        <div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-8 h-8" />
            <h2 className="text-xl font-semibold">Findurspace</h2>
          </div>
          <p className="mt-4 text-sm">
            Follow us on social media to stay updated with the latest coworking trends, special deals, & workspace tips.
          </p>
          <div className="flex space-x-4 mt-4">
            <Facebook className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Our Presence</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Product Help */}
        <div>
          <h3 className="font-semibold mb-2">Product Help</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cancellation & Refund Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-2">
              <MapPin className="w-5 h-5 mt-1" />
              <span>
                Excel Coworks - Naagarabhaavi, Bangalore 3rd Floor, Tushar Arcade, Service Road, Bengaluru, Karnataka 560072
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+91-8069328922</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>sales@findurspace.tech</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t text-center text-black text-sm py-4 px-6 bg-yellow-400">
        <p>© Copyrights 2025 FindurSpace All rights reserved.</p>
        <p className="mt-1">Powered by Propques Services Pvt Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
