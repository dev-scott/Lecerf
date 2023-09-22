import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  shippingInfo: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Address",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  productItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
    },
  ],


  createAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
