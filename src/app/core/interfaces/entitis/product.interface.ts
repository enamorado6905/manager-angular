import { IColorProduct } from './color-product.interface';
import { ISizeProduct } from './size-product.interface';

export interface IProduct {
  name: String;
  price: Number;
  quantityProducts: Number;
  accounting: {
    amount: Number;
    color: IColorProduct;
    size: ISizeProduct;
  };
  description: String;
  category: String;
  photo: String;
  discount: {
    isDiscount: Boolean;
    previous_price: Number;
  };
  details: {
    closure: String;
    details: String;
    fabric: String;
    length: String;
    neckline: String;
    waistline: String;
  };
  active: Boolean;
  createdAt: Date;
  updatedAt: Date;
}
