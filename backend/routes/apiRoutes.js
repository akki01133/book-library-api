import { Router } from "express";
import {
  getBooks,
  createBook,
  updateBook,
} from "../controllers/apiController.js";

const router = Router({ mergeParams: true });
router.route("/books").get(getBooks).post(createBook);
router.route("/books/:id").put(updateBook);

export default router;
