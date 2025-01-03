'use client'

import { useState } from 'react';
import { ArrowBottom } from '../common/Icons';

export default function ShippingAndReturns() {
    const [activeSection, setActiveSection] = useState<string | null>('shipping');
    const [expandedItems, setExpandedItems] = useState<ExpandedItems>({});

    interface SectionToggleProps {
        section: string;
    }

    const toggleSection = ({ section }: SectionToggleProps): void => {
        setActiveSection(activeSection === section ? null : section);
    };

    interface ExpandedItems {
        [key: string]: boolean;
    }

    const toggleItem = (item: string): void => {
        setExpandedItems((prev: ExpandedItems) => ({ ...prev, [item]: !prev[item] }));
    };

    return (
        <main className="container w-[95%] md:3/4  mx-auto px-4 py-12 mt-16">
            <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Envíos y Devoluciones</h1>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Navegación */}
                <nav className="md:w-1/4 block md:hidden">
                    <ul className="flex md:flex-col gap-4">
                        {['shipping', 'returns'].map((section) => (
                            <li key={section}>
                                <button
                                    onClick={() => toggleSection({ section })}
                                    className={`w-full text-left py-2 px-4 rounded-lg transition-colors ${activeSection === section
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {section === 'shipping' ? 'Envíos' : 'Devoluciones'}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contenido */}
                <div className="w-full">
                    {/* Sección de Envíos */}
                    <section className={`mb-8 ${activeSection === 'shipping' ? 'block' : 'hidden md:block'}`}>
                        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Envíos</h2>

                        {['options', 'costs', 'times', 'restrictions'].map((item) => (
                            <article key={item} className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
                                <button
                                    onClick={() => toggleItem(`shipping-${item}`)}
                                    className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                                >
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {item === 'options' && 'Opciones de envío'}
                                        {item === 'costs' && 'Costos de envío'}
                                        {item === 'times' && 'Tiempos de entrega'}
                                        {item === 'restrictions' && 'Restricciones de envío'}
                                    </h3>
                                    <div className={`w-5 h-5 text-gray-500 transition-transform ${expandedItems[`shipping-${item}`] ? 'transform rotate-180' : ''}`}>
                                        <ArrowBottom />
                                    </div>
                                </button>
                                <div className={`p-4 bg-white ${expandedItems[`shipping-${item}`] ? 'block' : 'hidden'}`}>
                                    {item === 'options' && (
                                        <>
                                            <p className="text-gray-600 mb-2">
                                                Ofrecemos diferentes métodos de envío para adaptarnos a tus necesidades:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-600">
                                                <li>Envío estándar</li>
                                                <li>Envío exprés</li>
                                            </ul>
                                        </>
                                    )}
                                    {item === 'costs' && (
                                        <p className="text-gray-600">
                                            Los costos de envío varían según tu ubicación y el método seleccionado.
                                        </p>
                                    )}
                                    {item === 'times' && (
                                        <>
                                            <p className="text-gray-600 mb-2">
                                                Los tiempos estimados de entrega son los siguientes:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-600 mb-2">
                                                <li>Envíos nacionales: 3-5 días hábiles</li>
                                            </ul>
                                            <p className="text-gray-600">
                                                Una vez que tu pedido haya sido enviado, recibirás un correo electrónico con un número de seguimiento para rastrear tu paquete en tiempo real.
                                            </p>
                                        </>
                                    )}
                                    {item === 'restrictions' && (
                                        <p className="text-gray-600">
                                            Actualmente no realizamos envíos a apartados postales ni a ciertos países debido a
                                            restricciones logísticas. Por favor, verifica durante el proceso de compra si tu ubicación es elegible.
                                        </p>
                                    )}
                                </div>
                            </article>
                        ))}
                    </section>

                    {/* Sección de Devoluciones */}
                    <section className={`${activeSection === 'returns' ? 'block' : 'hidden md:block'}`}>
                        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Devoluciones</h2>

                        {['deadlines', 'conditions', 'process', 'refunds', 'exchanges'].map((item) => (
                            <article key={item} className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
                                <button
                                    onClick={() => toggleItem(`returns-${item}`)}
                                    className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                                >
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {item === 'deadlines' && 'Plazos de devolución'}
                                        {item === 'conditions' && 'Condiciones para devoluciones'}
                                        {item === 'process' && 'Proceso de devolución'}
                                        {item === 'refunds' && 'Reembolsos'}
                                        {item === 'exchanges' && 'Cambios'}
                                    </h3>
                                    <div className={`w-5 h-5 text-gray-500 transition-transform ${expandedItems[`returns-${item}`] ? 'transform rotate-180' : ''}`}>
                                        <ArrowBottom />
                                    </div>
                                </button>
                                <div className={`p-4 bg-white ${expandedItems[`returns-${item}`] ? 'block' : 'hidden'}`}>
                                    {item === 'deadlines' && (
                                        <p className="text-gray-600">
                                            Puedes devolver un producto dentro de los <strong>7 días</strong> posteriores a su recepción.
                                        </p>
                                    )}
                                    {item === 'conditions' && (
                                        <>
                                            <p className="text-gray-600 mb-2">
                                                Para ser elegible para una devolución, el producto debe estar en su estado original:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-600">
                                                <li>Sin uso y en su empaque original</li>
                                                <li>Con todas las etiquetas y accesorios incluidos</li>
                                            </ul>
                                        </>
                                    )}
                                    {item === 'process' && (
                                        <p className="text-gray-600">
                                            Sigue estos pasos para devolver un producto:
                                        </p>
                                    )}
                                    {item === 'refunds' && (
                                        <p className="text-gray-600">
                                            Los reembolsos se procesarán dentro de los <strong>7 días hábiles</strong> posteriores a la recepción del producto devuelto. El reembolso se realizará al método de pago original o como crédito en la tienda, según prefieras.
                                        </p>
                                    )}
                                    {item === 'exchanges' && (
                                        <p className="text-gray-600">
                                            Puedes cambiar un producto por otra talla o modelo dentro del plazo de devolución. Contáctanos para más información.
                                        </p>
                                    )}
                                </div>
                            </article>
                        ))}
                    </section>
                </div>
            </div>
        </main>
    );
}

