'use client'

export default function FAQPage() {
    const faqs = [
        {
            question: "¿Cuáles son los métodos de pago aceptados?",
            answer: "Aceptamos tarjetas de crédito (Visa, MasterCard, American Express), PayPal, transferencias bancarias y pago contra entrega en algunas zonas."
        },
        {
            question: "¿Cuánto tiempo tarda en llegar mi pedido?",
            answer: "El tiempo de entrega varía según su ubicación. Generalmente, los pedidos nacionales tardan de 3 a 5 días hábiles, mientras que los internacionales pueden tardar de 7 a 14 días hábiles."
        },
        {
            question: "¿Puedo cambiar o cancelar mi pedido después de realizarlo?",
            answer: "Puede cambiar o cancelar su pedido dentro de las primeras 24 horas después de realizarlo. Después de este período, el pedido ya estará en proceso de envío y no podrá ser modificado."
        },
        {
            question: "¿Qué hago si recibo un producto defectuoso?",
            answer: "Si recibe un producto defectuoso, por favor contáctenos dentro de los 7 días posteriores a la recepción. Le proporcionaremos instrucciones para devolverlo y le enviaremos un reemplazo sin costo adicional."
        },
        {
            question: "¿Ofrecen garantía en sus productos?",
            answer: "Sí, todos nuestros productos vienen con una garantía de 1 año que cubre defectos de fabricación. Algunos productos electrónicos pueden tener garantías extendidas."
        },
        {
            question: "¿Cómo puedo rastrear mi pedido?",
            answer: "Una vez que su pedido haya sido enviado, recibirá un correo electrónico con un número de seguimiento y un enlace para rastrear su paquete en tiempo real."
        },
        {
            question: "¿Realizan envíos internacionales?",
            answer: "Sí, realizamos envíos a la mayoría de los países. Los costos y tiempos de envío varían según el destino. Puede verificar si hacemos envíos a su país durante el proceso de compra."
        },
        {
            question: "¿Cómo puedo devolver un producto?",
            answer: "Para devolver un producto, inicie sesión en su cuenta, vaya a 'Mis Pedidos', seleccione el producto que desea devolver y siga las instrucciones. Tiene 30 días desde la recepción para iniciar una devolución."
        },
        {
            question: "¿Ofrecen descuentos para compras al por mayor?",
            answer: "Sí, ofrecemos descuentos para compras al por mayor. Por favor, contáctenos a través de nuestro formulario de contacto para empresas para obtener más información y una cotización personalizada."
        },
        {
            question: "¿Cómo puedo contactar al servicio al cliente?",
            answer: "Puede contactarnos a través de nuestro chat en vivo, por correo electrónico a soporte@miecommerce.com, o por teléfono al 1-800-123-4567, de lunes a viernes de 9am a 6pm."
        },
        {
            question: "¿Tienen una política de igualación de precios?",
            answer: "Sí, si encuentra el mismo producto a un precio más bajo en otra tienda en línea autorizada dentro de los 14 días posteriores a su compra, igualaremos el precio y le reembolsaremos la diferencia."
        },
        {
            question: "¿Cómo protegen mi información personal y de pago?",
            answer: "Utilizamos encriptación SSL de 256 bits para proteger toda la información transmitida en nuestro sitio. Además, no almacenamos información de tarjetas de crédito y cumplimos con los estándares PCI DSS para el procesamiento de pagos."
        }
    ];

    return (
        <main className="container mx-auto px-4 py-8">
            <header className="text-center">
                <h1 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h1>
                <p className="text-gray-600">Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.</p>
            </header>

            <section className="w-full max-w-2xl mx-auto" aria-labelledby="faq-heading">
                <h2 id="faq-heading" className="sr-only">
                    Sección de preguntas frecuentes
                </h2>
                {faqs.map((faq, index) => (
                    <details
                        key={index}
                        className="mb-4 border-b border-gray-300"
                        role="group"
                    >
                        <summary className="cursor-pointer px-4 py-2 font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            {faq.question}
                        </summary>
                        <div className="px-4 py-2 text-gray-600">
                            {faq.answer}
                        </div>
                    </details>
                ))}
            </section>
        </main>
    );
}
