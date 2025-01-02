// hooks/useStockCounter.ts
import { useCounter } from "@uidotdev/usehooks";
import { useStore } from "@store/Store.products";

export const useStockCounter = (productId: number, productPrice: number) => {
    // Estado global del stock inicial
    const initialStock = useStore((state) => state.stock[productId]);



    // Maneja el contador localmente
    const [count, { increment, decrement }] = useCounter(initialStock, {
        min: 0,
        max: 10,
    });

    // Función global para actualizar stock y precio
    const updateStockAndPrice = useStore((state) => state.updateStockAndPrice);

    // Incrementa el contador y actualiza el estado global
    const handleIncrement = () => {
        if (count < 10) {
            const newStock = count + 1;
            increment();
            updateStockAndPrice(productId, newStock, productPrice);
        }
    };

    // Decrementa el contador y actualiza el estado global
    const handleDecrement = () => {
        if (count > 1) {
            const newStock = count - 1;
            decrement();
            updateStockAndPrice(productId, newStock, productPrice);
        }
    };

    return { count, handleIncrement, handleDecrement };
};
