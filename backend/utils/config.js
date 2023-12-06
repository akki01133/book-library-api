import dotenv from "dotenv";
dotenv.config();

const CONFIG = {
  PORT: process.env.PORT || 5000,
  MONGOOSE_URI:
    process.env.NODE_ENV == "production"
      ? process.env.MONGOOSE_URI
      : "mongodb://0.0.0.0:27017/letsbloom",
};

export default CONFIG;
