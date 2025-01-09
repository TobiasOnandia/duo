'use client'

import { useState, useEffect } from "react"
import { supabase } from "@lib/supabaseClient"
import { toast } from "sonner"
import { type OrderType } from "@/app/types/DatabaseTypes"

export const Envios = () => {
  const [shipments, setShipments] = useState<OrderType[] | []>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchShipments = async () => {
      setLoading(true)
      const { data, error } = await supabase.from("orders").select("*")

      if (error) {
        toast.error("Error al cargar los envíos: " + error.message)
      } else {
        setShipments(data!)
      }
      setLoading(false)
    }

    fetchShipments()
  }, [])

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pendiente':
        return 'bg-yellow-100 text-yellow-800'
      case 'en camino':
        return 'bg-blue-100 text-blue-800'
      case 'entregado':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="w-[95%] h-screen md:w-4/5 mx-auto mt-24 bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200">
      <header className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800">Mis Envíos</h1>
      </header>
      <main className="p-6">
        {loading ? (
          <div role="alert" className="space-y-4">
            <p>Cargando envíos...</p>
            {[...Array(3)].map((_, index) => (
              <div key={index} className="h-8 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        ) : shipments.length === 0 ? (
          <p className="text-center text-gray-500 py-4">
            No hay envíos registrados.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200" aria-label="Tabla de envíos">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N° Envío</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destinatario</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {shipments.map((shipment) => (
                  <tr key={shipment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" headers="shipping-number">{shipment.order_id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" headers="recipient">{shipment.total}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(shipment.status || '')}`} aria-label={`Estado: ${shipment.status || 'Desconocido'}`}>
                        {shipment.status || 'Desconocido'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" headers="date">{new Date(shipment.created_at).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 cursor-pointer hover:text-indigo-900 flex items-center justify-end w-full" aria-label={`Ver detalles del envío ${shipment.id}`}>
                        Ver Detalles
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}
