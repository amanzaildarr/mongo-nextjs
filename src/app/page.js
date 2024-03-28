import axios from "axios";
import { headers } from "next/headers";
import ShoppingCartList from "./_components/cart";

export default async function Home() {
  const http = headers().get("x-forwarded-proto");
  const uri = headers().get("x-forwarded-host");
  const response = await axios.get(http + "://" + uri + "/api/partner");
  const cart = response.data.carts[0];
  return (
    <div>
      <ShoppingCartList cart={cart} />
    </div>
  );
}
