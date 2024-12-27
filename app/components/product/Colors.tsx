import { useStore } from "@store/Store.products";

export const Colors = ({ productId }: { productId: number }) => {
  const colors = useStore((state) => state.colors[productId]) || 'red';
  const selectedColors = useStore((state) => state.updateColors || 'red');

  return (
    <section className="flex gap-2">
      {["black", "blue", "green"].map((color) => (
        <button
          key={color}
          className={`w-8 forced-colors:block h-8 rounded border-2 cursor-pointer ${colors[0] === color ? "border-primary" : "border-transparent"
            }`}
          style={{ backgroundColor: color }}
          onClick={() => selectedColors(productId, [color])}
          aria-label={`Select ${color} color`}
        />
      ))}
    </section>
  );
};
