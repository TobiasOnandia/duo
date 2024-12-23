import { CardCheckout } from "./CardCheckout";
import { TrashIcon } from "./Icons";
import { OrderSummary } from "./OrderSummary";
import { Recommend } from "./Recommend";

export const Checkout = () => {


  
  return (
    <main className="container w-[95%] md:w-4/5 mx-auto mt-24 bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200">
      <div className="flex flex-col lg:flex-row gap-6 ">
        {/* Sección de productos */}
        <div className="flex-[0.7] ">
          {/* Encabezado */}
          <header className="flex items-center justify-between pb-6 border-b border-gray-300">
            <h1 className="text-2xl font-bold text-gray-800">Tus productos</h1>
            <button className="flex items-center gap-2 cursor-pointer text-red-600 hover:text-red-800 transition-colors">
              <TrashIcon />
              <span className="font-medium">Vaciar</span>
            </button>
          </header>

          {/* Etiquetas */}
          <section className="flex items-center gap-4 py-4 border-b border-gray-300">
            <div className="w-24 hidden sm:block"></div>
            <div className="flex w-full justify-between sm:px-4 ml-4 text-gray-500 font-semibold">
              <p>Producto</p>
              <p>Cantidad</p>
              <p>Precio</p>
            </div>
          </section>

          {/* Lista de productos */}
          <div className="overflow-y-auto max-h-[400px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <CardCheckout />
          </div>
        </div>

        {/* Resumen del pedido */}
        <OrderSummary />
      </div>

      {/* Productos recomendados */}
      <section className="mt-8">
        <Recommend />
      </section>
    </main>
  );
};
