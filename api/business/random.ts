import {VercelRequest, VercelResponse} from "@vercel/node";
import {businesses} from "../../src/data/businesses";

export default async (req: VercelRequest, res: VercelResponse) => {
    const allBusinesses = businesses.data.search.business;
    const randomIndex = Math.floor(Math.random() * allBusinesses.length) + 1
    res.status(200).send({businesses: allBusinesses[randomIndex]})
};
