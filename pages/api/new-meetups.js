import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const Data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://JayanthShetty:QWERTY123@mymango06.ycdcbus.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(Data);
    console.log(result);

    client.close();
    res.status(201).json({ message: "meetup inserted" });
  }
}
