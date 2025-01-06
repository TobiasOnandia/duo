import { Database } from "@/database.types"

type OrderEntity = Database['public']['Tables']['orders']['Row']

export type OrderType = OrderEntity