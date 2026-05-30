import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO */}
                <Link to="/">
                    <h1 className="text-2xl font-extrabold text-orange-500">Jose Recipes</h1>
                </Link>

                {/* NAVIGATION */}
                <nav className="flex items-center gap-6">

                    <Link to="/" className="font-medium hover:text-orange-500 transition">Home</Link>

                    <Link to="/favourites" className="font-medium hover:text-orange-500 transition">Favourites</Link>
                </nav>
            </div>
      </header>
    </div>
  );
};

export default Header;
