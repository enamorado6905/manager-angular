export class Category {
  static categoryJson(object: any) {
    return new Category(
      object['_id']!,
      object['name'],
      object['description'],
      object['active'],
      object['createdAt'],
      object['updatedAt']
    );
  }

  constructor(
    public _id: string,
    public name: string,
    public description: string,
    public active: boolean,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
