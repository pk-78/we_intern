export default function Header() {
    return (
      <header>
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 text-white shadow-lg">
          {/* Logo Section */}
          <div>
            <h1 className="text-3xl font-extrabold tracking-wide ml-10">WE_INTERN</h1>
          </div>
  
          {/* Navigation Links */}
          <ul className="flex space-x-8 text-lg font-semibold mr-10">
            <li className="hover:text-yellow-300 cursor-pointer transition-transform transform hover:scale-110">
              Home
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition-transform transform hover:scale-110">
              Contact Us
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition-transform transform hover:scale-110">
              Sign Up
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition-transform transform hover:scale-110">
              Payment
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  