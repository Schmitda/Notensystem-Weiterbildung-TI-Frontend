import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

export abstract class BaseCrudService<T> {
  public baseUrl: string = environment.apiUrl;

  public constructor(protected httpClient: HttpClient, url: string) {
    this.baseUrl += `/${url}`;
  }

  public getAll() {
    return this.httpClient.get<T[]>(this.baseUrl);
  }

  public save(objToSave: T) {
    return this.httpClient.post<T>(this.baseUrl, objToSave);
  }

  public update(objToUpdate: T) {
    return this.httpClient.put(this.baseUrl, objToUpdate);
  }

  public delete(id: number) {
    return this.httpClient.delete(this.baseUrl);
  }

}
