export class Permission {
  static permissionJson(object: any) {
    return new Permission(
      object['_id']!,
      object['name'],
      object['description'],
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
    public isProtected: boolean,
    public active: boolean,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
