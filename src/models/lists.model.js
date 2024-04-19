import { Schema, model } from "mongoose";

const listSchema = new Schema(
  {
    code: {
      type: String,
      unique: true,
      require: true,
    },

    Ldr: Boolean,
    Temperature: Number,
    ObjectDistancie: Number,
    StatusLed: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("lists", listSchema);
