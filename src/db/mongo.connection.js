import { getAwsSecrets } from "@/helper/aws.secrets";
import mongoose from "mongoose";
import path from "path";

const cached = {};
export default async function connectMongo() {
  const { doc_db_username, doc_db_password, doc_db_host, doc_db_port } =
    await getAwsSecrets();

  let MONGO_URI;
  if (process.env.NODE_ENV === "development") {
    MONGO_URI = process.env.MONGO_URI;
  } else {
    MONGO_URI = `mongodb://${doc_db_username}:${doc_db_password}@${doc_db_host}:${doc_db_port}/`;
  }

  if (!MONGO_URI) {
    throw new Error("Please define the MONGO_URI environment variable");
  }

  if (cached.connection) {
    return cached.connection;
  }

  if (!cached.promise) {
    const uri = MONGO_URI + process.env.DB_NAME;
    cached.promise = mongoose.connect(uri, {
      tls: true,
      tlsInsecure: true,
      directConnection: true,
      authSource: "admin",
      retryWrites: false,
      tlsCAFile: path.resolve(__dirname, "../../../../../global-bundle.pem"),
    });
  }

  try {
    cached.connection = await cached.promise;
  } catch (e) {
    cached.promise = undefined;
    throw e;
  }
  return cached.connection;
}
