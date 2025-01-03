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
  total: number
}

export async function POST( req : Request) {
  const body = await req.json();

  const products = body.items

  console.log(products)


  try {
    const preference = {
      items: products.map((product: TypesRequest ) => ({
        id: product.id,
        title: product.title,
        quantity: product.quantity,
        unit_price: product.unit_price,
      })),
      metadata: {
        order_id: "1234",
        direccion: "Calle 123",
        telefono: "123456789",
      },
      notification_url: "https://z0f1c4j8-3000.brs.devtunnels.ms/"
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
