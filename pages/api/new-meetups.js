import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const Data = req.body;

    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const meetupsCollection = db.collection(process.env.MONGODB_DB);
    const result = await meetupsCollection.insertOne(Data);
    console.log(result);

    client.close();
    res.status(201).json({ message: "meetup inserted" });
  }
}
