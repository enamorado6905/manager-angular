export class UploadPhoto {
  static uploadPhotoJson(object: any) {
    return new UploadPhoto(
      object['_id']!,
      object['entitiId'],
      object['typeEntiti'],
      object['files'],
      object['active'],
      object['createdAt'],
      object['updatedAt']
    );
  }

  constructor(
    public _id: string,
    public entitiId: string,
    public typeEntiti: string,
    public files: Array<string>,
    public active: boolean,
    public createdAt: Date,
    public updatedAt: Date
  ) { }
}
