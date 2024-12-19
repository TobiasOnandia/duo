export const OrderSummary = () => {
  return (
    <section className="flex flex-col  h-fit items-center justify-between rounded border p-4 py-4 flex-[0.3]">
        <p className="text-lg flex justify-between items-center w-full">Subtotal
            <span>
                 $100
            </span>
        </p>
        <p className="text-lg flex justify-between items-center py-4 w-full">Envio
         <span>$ 1000</span>
        </p>
        <p className="text-lg flex justify-between border-dashed  items-center border-t-2 py-4 w-full">Total
         <span>$ 2500</span>
        </p>
        <button className="bg-secondary text-primary w-full cursor-pointer py-2 rounded">
            Comprar Ahora
        </button>
    </section>
  );
};