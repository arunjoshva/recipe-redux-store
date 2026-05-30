import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-4">
            <Link to="/">
                <h2 className="text-sm font-bold hover:text-gray-300">Jose Recipes</h2>
            </Link>

            <p className="text-sm text-gray-400">© 2026</p>
        </div>

    </footer>
  );
};

export default Footer;
