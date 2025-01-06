import { supabase } from "@/app/lib/supabaseClient";
import { OrderCompleted } from "@components/pages/OrderCompleted";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug

    const { data: orders } = await supabase.from('orders').select('*').eq('order_id', slug)
    

    return (

        <OrderCompleted {...orders![0]} />
    )
}