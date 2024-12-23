export const Description = () => {
    return(
         <article className='space-y-4'>
              <h1 className="text-3xl font-bold">Boa Fleece Jacket</h1>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-2xl font-bold">$122.00</span>
                <span className="text-gray-500 line-through">$129.00</span>
                <span className="bg-black text-white text-sm px-2 py-1 rounded">SALE</span>
              </div>
              <div className="mt-4 prose prose-gray max-w-none">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ducimus
                  aut explicabo quas, dolorem exercitationem, facilis dolor dicta amet
                  officiis doloremque deserunt itaque error velit inventore perferendis,
                  veritatis a. Impedit?
                </p>
              </div>
            </article>
    )
}