import axios from "axios";
import { headers } from "next/headers";

export default async function Home() {
  const uri = headers().get("referer");
  const response = await axios.get(uri + "api/partner");
  return (
    <div>
      <h1>Hello world!!!</h1>
      <h3>API Response</h3>
      <p>{JSON.stringify(response.data)}</p>
    </div>
  );
}
