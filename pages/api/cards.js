import fs from "fs";
const sampleCardsJson = fs.readFileSync("./assets/samplecards.json", "utf-8");

export default (req, res) => {
  res.status(200).json(JSON.parse(sampleCardsJson));
};
