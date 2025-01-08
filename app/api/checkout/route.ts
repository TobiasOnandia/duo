import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

// Configura MercadoPago con tu token de acceso
const mercadoPago = new MercadoPagoConfig({
  accessToken:
    "APP_USR-6357028690192021-123014-c73f5b1892038188f2ef478ced81536b-2187542332",
});

export interface TypesRequest {
  id: number;
  title: string;
  unit_price: number;
  quantity: number;
}

export async function POST(req: Request) {
  const body = await req.json();
  const products = body.items;
  const userInfo = body.metadata;

  const authHeader = req.headers.get("Authorization");
  const token = authHeader?.split("Bearer ")[1];

  try {
    const preference = {
      items: products.map((product: TypesRequest) => ({
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
        user_id: userInfo.user,
        access_token: token,
      },
      notification_url:
        "https://z0f1c4j8-3000.brs.devtunnels.ms/api/notification_url",
      back_urls: {
        success: `https://z0f1c4j8-3000.brs.devtunnels.ms/order/${body.order_id}`,
        failure: "https://z0f1c4j8-3000.brs.devtunnels.ms/failure",
        pending: "https://z0f1c4j8-3000.brs.devtunnels.ms/pending",
      },
      auto_return: "approved",
    };
    const response = await new Preference(mercadoPago).create({
      body: preference,
    });
    return NextResponse.json({ init_point: response.init_point });
  } catch (error) {
    console.error("Error creating MercadoPago preference:", error);
    return NextResponse.json(
      { error: "Failed to create preference" },
      { status: 500 },
    );
  }
}
