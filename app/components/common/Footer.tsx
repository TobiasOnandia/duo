import { Link } from "next-view-transitions";
import { IgIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 rounded-t-lg mt-8 text-white">
      {/* Parte superior */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-10 ">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Información de la tienda */}
          <div className="flex flex-col space-y-4 w-full sm:w-1/3">
            <h3 className="text-xl font-bold">Duo</h3>
            <p className="text-sm text-gray-400">
              Tu tienda online de confianza. Encuentra los mejores productos al mejor precio.
            </p>
            <p className="text-sm text-gray-400">
              Dirección: Calle 25 de Mayo 466, La Pampa, Argentina.
            </p>
            <p className="text-sm text-gray-400">Teléfono: +123 456 789</p>
            <p className="text-sm text-gray-400">Email: contacto@duo.com</p>
          </div>

          {/* Enlaces útiles */}
          <div className="flex flex-col space-y-4 w-full sm:w-1/4">
            <h4 className="text-lg font-bold">Enlaces útiles</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-white hover:text-gray-400 transition">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white hover:text-gray-400 transition">
                  Términos de uso
                </a>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="text-sm text-white hover:text-gray-400 transition">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link href="/envios-y-devoluciones" className="text-sm text-white hover:text-gray-400 transition">
                  Envíos y devoluciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="flex flex-col space-y-4 w-full sm:w-1/4">
            <h4 className="text-lg font-bold">Síguenos</h4>
            <ul className="flex flex-col space-x-4">
              <li>
                <Link
                  href="https://www.facebook.com/profile.php?id=61570252746696"
                  className="text-white hover:text-gray-400 transition"
                  aria-label="Facebook"
                  target="_blank"
                >
                  Facebook
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link
                  href="https://www.instagram.com/duo.indumentariasr/"
                  className="text-white hover:text-gray-400 transition"
                  aria-label="Instagram"
                  target="_blank"

                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Parte inferior */}
      <div className="bg-neutral-800 py-6">
        <div className="px-6 sm:px-12 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Duo. Todos los derechos reservados.
          </p>
          <ul className="flex space-x-4 mt-4 sm:mt-0">
            <li>
              <a href="#" className="text-sm text-white hover:text-gray-400 transition">
                Política de cookies
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-white hover:text-gray-400 transition">
                Mapa del sitio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
