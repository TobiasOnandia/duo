import MercadoPagoConfig from "mercadopago";

const mercadoPago = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export default mercadoPago;
