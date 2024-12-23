export const Footer = () => {
    return (
      <footer className="flex sm:items-center sm:flex-row flex-col  items-start justify-between py-6 px-8 mt-14 bg-neutral-900 text-white shadow-lg ">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Duo. Todos los derechos reservados.
        </p>
        <ul className="flex sm:space-x-4 sm:p-0 py-4 ">
          <li>
            <a href="#" className="text-white hover:text-gray-400 transition">
              Política de privacidad
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400 transition">
              Términos de uso
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400 transition">
              Contacto
            </a>
          </li>
        </ul>
      </footer>
    );
  };
  