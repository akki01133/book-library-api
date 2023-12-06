import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: [String],
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => new Date().toISOString(),
  },
  updatedAt: {
    type: Date,
    default: () => new Date().toISOString(),
  },
});

// Duplicate the ID field.
bookSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
bookSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.createdAt;
    delete ret.updatedAt;
  },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
