import helmet from "@/public/gorra.jpeg"


import Image from "next/image";
import { AddIcon } from "./Icons";



export const Product = () => {
    return(
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full ">
            <article className="w-full">
                <Image src={helmet} alt="helmet" className="rounded-lg" width={300} height={300} />
                <div className="max-w-[300px] w-full flex flex-col gap-2 ">
                    <header className="flex items-center justify-between">
                    <h4 className="text-xl  font-semibold">Gorra</h4>
                    <p className="text-lg  ">$ 100</p>
                    </header>
                    
                    <p className="text-ellipsis overflow-hidden whitespace-nowrap ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia consectetur delectus autem magni voluptate. Tenetur sunt nobis consectetur quisquam qui, omnis repellendus recusandae, sequi porro accusamus dicta error atque numquam.</p>
                    <footer className="flex items-center justify-between">
                        <button className="bg-violet-600 text-white px-4 py-2 rounded-lg w-fit cursor-pointer hover:bg-neutral-900 transition-colors ">Comprar</button>
                        <button className="bg-violet-500 text-white px-4 py-2 rounded-lg w-fit cursor-pointer hover:bg-neutral-900 transition-colors hidden text-nowrap lg:block">Agregar a carrito</button>

                        <button className="block lg:hidden cursor-pointer ">
                            <AddIcon />
                        </button>
                    </footer>
                </div>
            </article>
           
    
        </section>
    )
}