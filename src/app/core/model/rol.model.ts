export class Rol {
  static rolJson(object: any) {
    return new Rol(
      object['_id']!,
      object['name'],
      object['description'],
      object['permissions'],
      object['isProtected'],
      object['active'],
      object['createdAt'],
      object['updatedAt']
    );
  }

  constructor(
    public _id: string,
    public name: string,
    public description: string,
    public permissions: Array<string>,
    public isProtected: boolean,
    public active: boolean,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
