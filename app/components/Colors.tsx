import { useState } from "react"

export const Colors = () => {
  const [selectedColor, setSelectedColor] = useState('black')

    return (
              <section className="flex gap-2">
                  {["black", "blue", "green"].map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded border-2 cursor-pointer ${
                        selectedColor === color ? "border-primary" : "border-transparent"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                      aria-label={`Select ${color} color`}
                    />
                  ))}
                </section>
    )
}