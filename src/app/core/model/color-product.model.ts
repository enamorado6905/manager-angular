export class ColorProduct {
  static colorProductJson(object: any) {
    return new ColorProduct(
      object['_id']!,
      object['name'],
      object['photo'],
      object['active'],
      object['createdAt'],
      object['updatedAt']
    );
  }

  constructor(
    public _id: string,
    public name: string,
    public photo: string,
    public active: boolean,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
