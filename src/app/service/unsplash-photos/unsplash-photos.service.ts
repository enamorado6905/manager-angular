import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { addPhoto } from '../../core/interfaces/component/add-photo.interface';
import { Url } from '../../store/url';
import { lastValueFrom, Observable } from 'rxjs';
import { Paginated } from '@feathersjs/feathers';
import { OperationService } from 'src/app/core/feathersjs/operation.service';
import { UploadPhoto } from 'src/app/core/model/upload-photo.model';

@Injectable({
  providedIn: 'root',
})
export class UnsplashPhotoService {
  constructor(private http: HttpClient, private operation: OperationService) { }
  createPhoto$(data: addPhoto): Observable<UploadPhoto> {
    const formData = new FormData();
    formData.append('entitiId', data.entitiId);
    formData.append('typeEntiti', data.typeEntiti);
    data.photo.forEach((m) => {
      formData.append('photo', m.photo as File);
    });
    return this.http.post<UploadPhoto>(
      environment.apiFile + Url.uploadPhoto,
      formData
    );
  }
  updatePhoto$(id: string, data: addPhoto): Observable<UploadPhoto> {
    const formData = new FormData();
    formData.append('entitiId', data.entitiId);
    formData.append('typeEntiti', data.typeEntiti);

    // formData.append('photo', data.photo);
    return this.http.patch<UploadPhoto>(
      environment.apiEntitis + `${Url.feathersUploadPhoto}/${id}`,
      formData
    );
  }
  findPhoto$(data: addPhoto): Observable<Paginated<any>> {
    return this.operation.find(Url.feathersUploadPhoto, data, 'UploadPhoto');
  }
  findOnePhoto$(data: object): Observable<any> {
    return this.operation.findOne(Url.feathersUploadPhoto, data, 'UploadPhoto');
  }
  getPhoto$(id: string): Observable<any> {
    return this.operation.get(Url.feathersUploadPhoto, id, 'UploadPhoto');
  }
}
