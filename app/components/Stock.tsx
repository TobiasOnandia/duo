import { useCounter } from "@uidotdev/usehooks"
import { AddIcon, MinusIcon } from "./Icons"

export const Stock = () => {
    const [count, {increment, decrement}] = useCounter(1, {
        min: 1,
        max: 10
    })

    return(
        <section className="flex items-center pb-4 gap-2">
        <button disabled={count <= 1} onClick={decrement} className="cursor-pointer bg-neutral-600 p-1  rounded-full text-neutral-100">
          <MinusIcon />
        </button>
        <span className="text-xl ">{count}</span>
        <button disabled={count >= 10} onClick={increment} className="cursor-pointer bg-neutral-600 p-1 rounded-full text-neutral-100">
          <AddIcon />
        </button>
      </section>
    )
}