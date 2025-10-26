import { getActiveCartForUser } from "../services/cartService.ts";
import validateJWT from "../middleware/validateJWT.ts";
import express, { type Request, type Response } from "express";

interface CustomRequest extends Request {
  user: {
    _id: string;
  };
}

const router = express.Router();

router.get(
  "/",
  validateJWT,
  async (req: Request, res: Response) => {
    const userId = (req as CustomRequest).user._id;
    const cart = await getActiveCartForUser({ userId });
    res.status(200).send(cart);
  }
);

export default router;
