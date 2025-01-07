import { NextResponse } from "next/server";
import  { MercadoPagoConfig, Preference } from "mercadopago";

// Configura MercadoPago con tu token de acceso
const mercadoPago = new  MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export interface TypesRequest {
  id: number,
  title: string,
  unit_price: number,
  quantity: number,
}

export async function POST( req : Request) {
  const body = await req.json();
  const products = body.items
  const userInfo = body.metadata
  try {

    const preference = {
      items: products.map((product: TypesRequest ) => ({
        id: product.id,
        title: product.title,
        quantity: product.quantity,
        unit_price: product.unit_price,
      })),
      metadata: {
        order_id: userInfo.order_id,
        fullName: userInfo.fullName,
        email: userInfo.email,
        address: userInfo.address,
        city: userInfo.city,
        state: userInfo.state,
        postalCode: userInfo.postalCode,
        phone: userInfo.phone,
      },
      notification_url: "https://duo-plum.vercel.app/api/notification_url",
      back_urls: {
        success: `https://duo-plum.vercel.app/order/${body.order_id}`,
        failure: "https://duo-plum.vercel.app/failure",
        pending: "https://duo-plum.vercel.app/pending",
      },
      auto_return: "approved",
    };
    const response = await new Preference(mercadoPago).create({
      body: preference,
    });
    return NextResponse.json({ init_point: response.init_point });
  } catch (error) {
    console.error("Error creating MercadoPago preference:", error);
    return NextResponse.json({ error: "Failed to create preference" }, { status: 500 });
  }
}
