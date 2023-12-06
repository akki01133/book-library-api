import expressAsyncHandler from "express-async-handler";
import Book from "../models/bookModel.js";
import mongoose from "mongoose";

function isValidISODateString(str) {
  if (!str) {
    return false;
  }
  try {
    const date = new Date(str);
    return date.isValidISODateString;
  } catch (e) {
    console.log(e)
    return false;
  }
}
const validateBookData = (body) => {
  const { title, authors, isbn, publisher, publicationDate } = body;
  let res = [];

  if (!title || typeof title !== "string") {
    res.push("title: should be string");
  }
  if (
    typeof authors != "string" &&
    (!Array.isArray(authors) ||
      authors.some((author) => typeof author !== "string"))
  ) {
    res.push("authors: should be single string or array of string");
  }
  if (!isbn || typeof isbn !== "string") {
    res.push("isbn: should be string");
  }
  if (!publisher || typeof publisher !== "string") {
    res.push("publisher: should be string");
  }
  if (!isValidISODateString(publicationDate)) {
    res.push("publicationDate: should be date in iso string format");
  }
  return res;
};

const getBooks = expressAsyncHandler(async (req, res, next) => {
  const books = await Book.find();
  res.json(books);
});

const createBook = expressAsyncHandler(async (req, res, next) => {
  let validation = validateBookData(req.body);
  if (validation.length != 0) {
    res.status(400);
    throw new Error(`invalid fields: ${validation.join(", ")}`);
  }
  const { title, authors, isbn, publisher, publicationDate } = req.body;

  const existingBook = await Book.findOne({ $or: [{ title }, { isbn }] });
  if (existingBook) {
    res.status(409); // confict
    throw new Error(
      `A book with the same ${
        existingBook.title == title ? "title: " + title : "isbn: " + isbn
      } already exists.`
    );
  }
  const book = new Book({
    title,
    authors,
    isbn,
    publisher,
    publicationDate,
  });
  let createdBook = await book.save();
  const { _id } = createdBook;
  res.status(201).json({ id: _id, message: "Book created successfully" });
});

const updateBook = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid book id" });
  }
  const { title, authors, isbn, publisher, publicationDate } = req.body;
  const updatedAt = new Date().toISOString();
  const book = await Book.findOneAndUpdate(
    { _id: id },
    { title, authors, isbn, publisher, publicationDate, updatedAt },
    { returnOriginal: false }
  );
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found!!" });
  }
});

export { getBooks, createBook, updateBook };
