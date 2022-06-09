export class SizeProduct {
  static sizeProductJson(object: any) {
    return new SizeProduct(
      object['_id']!,
      object['size'],
      object['bust'],
      object['waist'],
      object['hips'],
      object['active'],
      object['createdAt'],
      object['updatedAt']
    );
  }

  constructor(
    public _id: string,
    public size: Number,
    public bust: Number,
    public waist: Number,
    public hips: Number,
    public active: boolean,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
