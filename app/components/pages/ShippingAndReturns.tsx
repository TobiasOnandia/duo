
export default function ShippingAndReturns() {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Envíos y Devoluciones</h1>

            {/* Sección de Envíos */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Envíos</h2>

                <article className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Opciones de envío</h3>
                    <p>
                        Ofrecemos diferentes métodos de envío para adaptarnos a tus necesidades:
                    </p>
                    <ul className="list-disc list-inside mt-2">
                        <li>Envío estándar</li>
                        <li>Envío exprés</li>
                    </ul>
                </article>

                <article className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Costos de envío</h3>
                    <p>
                        Los costos de envío varían según tu ubicación y el método seleccionado.
                    </p>
                </article>

                <article className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Tiempos de entrega</h3>
                    <p>
                        Los tiempos estimados de entrega son los siguientes:
                    </p>
                    <ul className="list-disc list-inside mt-2">
                        <li>Envíos nacionales: 3-5 días hábiles</li>
                    </ul>
                    <p className="mt-2">
                        Una vez que tu pedido haya sido enviado, recibirás un correo electrónico con un número de seguimiento para rastrear tu paquete en tiempo real.
                    </p>
                </article>

                <article>
                    <h3 className="text-lg font-semibold mb-2">Restricciones de envío</h3>
                    <p>
                        Actualmente no realizamos envíos a apartados postales ni a ciertos países debido a
                        restricciones logísticas. Por favor, verifica durante el proceso de compra si tu ubicación es elegible.
                    </p>
                </article>
            </section>

            {/* Sección de Devoluciones */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Devoluciones</h2>

                <article className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Plazos de devolución</h3>
                    <p>
                        Puedes devolver un producto dentro de los <strong>7 días</strong> posteriores a su recepción.
                    </p>
                </article>

                <article className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Condiciones para devoluciones</h3>
                    <p>
                        Para ser elegible para una devolución, el producto debe estar en su estado original:
                    </p>
                    <ul className="list-disc list-inside mt-2">
                        <li>Sin uso y en su empaque original</li>
                        <li>Con todas las etiquetas y accesorios incluidos</li>
                    </ul>
                </article>

                <article className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Proceso de devolución</h3>
                    <p>
                        Sigue estos pasos para devolver un producto:
                    </p>
                </article>

                <article className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Reembolsos</h3>
                    <p>
                        Los reembolsos se procesarán dentro de los <strong>7 días hábiles</strong> posteriores a la recepción del producto devuelto. El reembolso se realizará al método de pago original o como crédito en la tienda, según prefieras.
                    </p>
                </article>

                <article>
                    <h3 className="text-lg font-semibold mb-2">Cambios</h3>
                    <p>
                        Puedes cambiar un producto por otra talla o modelo dentro del plazo de devolución. Contáctanos para más información.
                    </p>
                </article>
            </section>

        </main>
    );
}
