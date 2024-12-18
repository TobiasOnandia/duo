export const Category = [
    "Remeras",
    "Pantalones",
    "Zapatos",
    "Camisetas",
    "Botas",
    "Mochilas",
  ];
  


export const Categories = () => {
    return(
        <aside className="flex-[0.3] px-4">
        <h3 className="text-md text-gray-400 font-semibold  py-4">Categorías</h3>
        <ul className="flex flex-col gap-4 ">
          {Category.map((category, index) => (
            <li
              key={index}
              className="flex items-center gap-4 hover py-1 px-4 cursor-pointer rounded w-full border-l-4 border-violet-600 hover:bg-violet-200 "
            >
              <span>{category}</span>
            </li>
          ))}
        </ul>

         <h3 className="text-md text-gray-400 font-semibold  pt-4">Precio</h3>
        <div className="">
         <input type="range" className="w-fit h-2 rounded-lg bg-violet-600 p-0 appearance-none cursor-pointer" min="0" max="100" step="1" />
          <div className="flex items-center justify-between">
          <span>
          0
         </span>
          <span>
            100
          </span>
          </div>
        </div>
      </aside>
    )
}