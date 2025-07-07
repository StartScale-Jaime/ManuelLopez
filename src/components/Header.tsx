import Link from "next/link";
import { User, Home, MessageCircle, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-br from-emerald-400/30 to-green-400/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                FootImproveness
              </h1>
              <p className="text-xs text-gray-500 font-medium">Entrenamiento Elite</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/"
              className="group flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-emerald-50 transition-all duration-300"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-100 to-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Home className="h-4 w-4 text-emerald-600" />
              </div>
              <span className="font-medium text-gray-700 group-hover:text-emerald-600 transition-colors">
                Inicio
              </span>
            </Link>

            <Link 
              href="/mi-historia"
              className="group flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-blue-50 transition-all duration-300"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <User className="h-4 w-4 text-blue-600" />
              </div>
              <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                Mi Historia
              </span>
            </Link>

            <Link 
              href="/contactos"
              className="group flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-purple-50 transition-all duration-300"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-4 w-4 text-purple-600" />
              </div>
              <span className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
                Contacto
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-col space-y-2">
            <Link 
              href="/"
              className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
            >
              <Home className="h-5 w-5 text-emerald-600" />
              <span className="font-medium text-gray-700">Inicio</span>
            </Link>
            <Link 
              href="/mi-historia"
              className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              <User className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-gray-700">Mi Historia</span>
            </Link>
            <Link 
              href="/contactos"
              className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-purple-50 transition-colors"
            >
              <MessageCircle className="h-5 w-5 text-purple-600" />
              <span className="font-medium text-gray-700">Contacto</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 