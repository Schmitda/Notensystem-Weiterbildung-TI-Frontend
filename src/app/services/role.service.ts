import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Role} from '../models/classes/Role';

@Injectable()
export class RoleService {

  constructor(private httpClient: HttpClient) {
  }

  public getAll() {
    return this.httpClient.get<Role[]>(`${environment.apiUrl}/api/roles`);
  }

}
