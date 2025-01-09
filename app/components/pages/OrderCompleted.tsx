"use client";
import { Link } from "next-view-transitions";
import { PackageIcon, TruckIcon } from "../common/Icons";
import Image from "next/image";
import CheckCircle from "@/public/checked.avif";
import { OrderType } from "@/app/types/DatabaseTypes";

export const OrderCompleted = (orders: OrderType) => {

  return (
    <main className="container mx-auto mt-16 px-4 py-8">
      <div
        className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden"
        role="alert"
      >
        <header className="text-center p-6">
          <figure className="mx-auto mb-4 bg-green-100 rounded-full p-2 w-16 h-16 flex items-center justify-center">
            <Image src={CheckCircle} alt="Checkmark" width={24} height={24} />
          </figure>
          <h1 className="text-2xl font-bold" tabIndex={0}>
            ¡Gracias por tu compra!
          </h1>
          <p className="text-gray-600">
            Tu pedido ha sido procesado con éxito.
          </p>
        </header>
        <section className="border-t border-b py-4">
          <h2 className="font-semibold mb-2 text-center">Resumen del pedido</h2>
          <div
            className="flex justify-between px-4"
            aria-label="Resumen del pedido"
          >
            <span>Número de pedido:</span>
            <span className="font-medium"># {orders.order_id}</span>
          </div>
          <div className="flex justify-between px-4">
            <span>Total:</span>
            <span className="font-medium">$ {orders.total}</span>
          </div>
        </section>
        <section className="px-4 py-4">
          <h2 className="font-semibold mb-2">Detalles de envío</h2>
          <div className="flex items-start space-x-2">
            <TruckIcon aria-hidden="true" />
            <div>
              <p className="font-medium">{orders.address}</p>
              <p>
                {orders.city},{orders.state} {orders.postalCode}
              </p>
            </div>
          </div>
        </section>
        <section className="px-4 py-4">
          <h2 className="font-semibold mb-2">Estado del pedido</h2>
          <div className="flex items-center space-x-2">
            <PackageIcon aria-hidden="true" />
            <span>En preparación</span>
          </div>
        </section>
        <footer className="flex justify-center py-4">
          <button className="bg-neutral-900 px-4 py-3 rounded text-white">
            <Link href="/" aria-label="Volver a la tienda">
              Volver a la tienda
            </Link>
          </button>
        </footer>
      </div>
    </main>
  );
};
