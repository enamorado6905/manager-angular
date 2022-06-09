import { Category } from './category.model';
import { ColorProduct } from './color-product.model';
import { SizeProduct } from './size-product.model';
import { UploadPhoto } from './upload-photo.model';

export class Product {
  static ProductJson(object: any) {
    return new Product(
      object['_id']!,
      object['name'],
      object['price'],
      object['quantityProducts'],
      object['accounting'],
      object['category'],
      object['description'],
      object['photo'],
      object['discount'],
      object['details'],
      object['active'],
      object['createdAt'],
      object['updatedAt']
    );
  }

  constructor(
    public _id: string,
    public name: string,
    public price: number,
    public quantityProducts: number,
    public accounting: Array<{
      amount: number;
      color: ColorProduct;
      size: SizeProduct;
    }>,
    public category: Array<Category>,
    public description: string,
    public photo: UploadPhoto,
    public discount: { isDiscount: boolean; previousPrice: number },
    public details: {
      closure: string;
      details: string;
      fabric: string;
      typeLength: string;
      neckLine: string;
      waistLine: string;
    },
    public active: boolean,
    public createdAt: Date,
    public updatedAt: Date
  ) { }
}
