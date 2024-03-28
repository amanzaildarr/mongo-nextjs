import { NextResponse } from "next/server";
import connectMongo from "../../../db/mongo.connection";
import Product from "../../../db/models/product";
import { HttpStatusCode } from "axios";
import mongoose from "mongoose";

export async function GET() {
  try {
    const db = await connectMongo();

    // const collection = mongoose.connection.db.collection("themepark_suppliers");
    // const documents = await collection.find({}).toArray();

    const products = await Product.find();
    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json({ status: 400, message: error.message });
  }
}

export async function POST(req) {
  try {
    await connectMongo();
    const body = await req.json();
    if (body.name) {
      const product = await Product.create(body);
      return NextResponse.json(
        { product, message: "Your product has been created" },
        { status: HttpStatusCode.Created }
      );
    }
    return NextResponse.json(
      { message: "Product name is missing" },
      { status: HttpStatusCode.BadRequest }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequestHttpStatusCode }
    );
  }
}
