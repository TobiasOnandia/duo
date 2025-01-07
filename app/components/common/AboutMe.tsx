'use client';

import Image from "next/image";
import background from "@/public/checked.avif"

export default function AboutMe() {
    return (
        <section className="w-[95%] md:w-4/5 mx-auto container bg-[#fdfdfd] min-h-full rounded-3xl shadow-lg border border-primary relative mt-16 z-10 p-4 md:p-8 text-neutral-900">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Contenedor de Texto */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 relative">
                        Sobre Nosotros
                        <span className="absolute -bottom-2 left-0 w-20 h-1 bg-blue-500"></span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        En <span className="font-semibold text-gray-900">Duo Indumentaria</span>, nos apasiona combinar estilo y calidad en cada prenda que ofrecemos.
                        Nuestro equipo trabaja día a día para brindarte diseños únicos que reflejen tu personalidad, siempre cuidando los detalles y adaptándonos a las últimas tendencias.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        Creemos en la moda como una forma de expresión, y nos enorgullece ser parte de tu día a día, ofreciendo productos que inspiran confianza y autenticidad.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-gray-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Contáctanos
                    </a>
                </div>

                {/* Contenedor de Imagen */}
                <div className="lg:w-1/2 relative">
                    <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-2xl">
                        <Image
                            src={background}
                            alt="Equipo de Duo Indumentaria"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                        />
                    </div>
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">10+</span>
                    </div>
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-gray-800 text-2xl font-bold">2013</span>
                    </div>
                </div>
            </div>
        </section>
    );
}