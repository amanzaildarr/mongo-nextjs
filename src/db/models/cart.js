import { model, models, Schema } from "mongoose";

const CartSchema = new Schema(
  {
    data: Object,
  },
  {
    timestamps: true,
    toJSON: {
      versionKey: false,
      virtuals: true,
      transform: (_, ret) => {
        delete ret._id;
      },
    },
  }
);
const Cart = models.Cart || model("Cart", CartSchema);
export default Cart;
