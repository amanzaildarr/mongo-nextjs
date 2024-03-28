import { NextResponse } from "next/server";
import connectMongo from "../../../db/mongo.connection";
import { HttpStatusCode } from "axios";
import Cart from "../../../db/models/cart";
// import mongoose from "mongoose";

export async function GET() {
  try {
    const db = await connectMongo();

    // const collection = mongoose.connection.db.collection("themepark_suppliers");
    // const documents = await collection.find({}).toArray();

    const carts = await Cart.find();
    return NextResponse.json({ count: carts.length, carts });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

export async function POST(req) {
  try {
    await connectMongo();
    const body = await req.json();
    if (Object.keys(body).length) {
      const cart = new Cart({ data: body });
      await cart.save();

      return NextResponse.json(
        { cart, message: "Your cart has been created" },
        { status: HttpStatusCode.Created }
      );
    }
    return NextResponse.json(
      { message: "Data name is missing" },
      { status: HttpStatusCode.BadRequest }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: HttpStatusCode.BadRequestHttpStatusCode }
    );
  }
}
