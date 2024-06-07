

import mongoose, { Schema } from "mongoose";


const refaccionSchema = new Schema(
  {
    car: String,
    model: String,
    year:String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Refaccion = mongoose.models.Refaccion || mongoose.model("Refaccion", refaccionSchema);

export default Refaccion;