import { VercelRequest, VercelResponse } from "@vercel/node";
import {businesses} from "../src/data/businesses";

export default async (req: VercelRequest, res: VercelResponse) => {
  res.status(200).send(businesses)
};
