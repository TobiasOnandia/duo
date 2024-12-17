import Image from "next/image"


export const Details = () => {
    return(
        <main >
            <div className="flex w-full h-full py-4 text-neutral-800"> 

             <ul className="flex flex-col h-full flex-[0.1] gap-4 px-8 ">
                        <li>
                            <Image src="/gorra.jpeg" alt="gorra" width={165} height={165} className="rounded-lg"/>
                        </li>
                        <li>
                            <Image src="/gorra.jpeg" alt="gorra" width={165} height={165} className="rounded-lg"/>
                        </li>
                        <li>
                            <Image src="/gorra.jpeg" alt="gorra" width={165} height={165} className="rounded-lg"/>
                        </li>
                        <li>
                            <Image src="/gorra.jpeg" alt="gorra" width={165} height={165} className="rounded-lg"/>
                        </li>
            </ul>

            <section className="flex-[0.5] ">
            <Image src="/gorra.jpeg" alt="gorra" width={660} height={660} className="rounded-lg"/>
            
            </section>


            <section className="flex-[0.6] h-full ml-4   flex flex-col gap-4">
                <h2 className="text-3xl font-semibold">
                    Gorra
                </h2>
                <p className="text-5xl font-bold">$ 120</p>
                <span className="text-lg font-light text-gray-400">Descripcion</span> 
                
                <p className="max-w-xl text-lg w-full text-balance">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda asperiores, nisi quis delectus quisquam perspiciatis dolorem, facilis iste sunt ipsa, inventore quidem necessitatibus itaque eius? Recusandae deserunt molestias amet alias.
                </p>


                <span className="text-lg font-light text-gray-400">Colores Disponibles</span> 

                <ul className="flex items-center gap-2 ">
                    <li className="flex items-center gap-2 p-2 w-8 h-8 rounded bg-red-300  ">    
                    </li>
                    <li className="flex items-center gap-2  p-2 w-8 h-8 rounded bg-blue-300">
                    </li>
                    <li className="flex items-center gap-2 p-2 w-8 h-8 rounded bg-green-300 ">
                    </li>
                </ul>

                <span className="text-lg font-light text-gray-400">Tamano</span> 

                <ul className="flex *:items-center *:flex *:justify-center gap-2 *:border *:border-gray-400  *:cursor-pointer *:p-2 *:w-8 *:h-8  *:rounded ">
                    <li>
                        S
                    </li>
                    <li>
                        M
                    </li>
                    <li>
                        L
                    </li>
                    <li>
                        XL
                    </li>
                </ul>

                <span className="text-lg font-light text-gray-400">Stock</span> 
                <div className="flex items-center gap-2">
                <button> - </button>
                <p className="text-lg ">
                    {12}
                </p>
                <button>+</button>
                </div>


                <button className="px-4 py-2 bg-violet-600 w-fit rounded text-neutral-100 font-semibold">Comprar Ahora</button>
            </section>

            </div>


            <section className="px-8 text-neutral-800">
                <h2 className="text-3xl  font-semibold">
                    Caracteristicas del producto
                </h2>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos illo perspiciatis architecto expedita voluptas magnam nisi sequi consequatur ea porro dignissimos quas, veritatis repudiandae? Neque temporibus veritatis enim impedit iure!
            </p>
            </section>

    

        </main>
    )
}