import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private domain_url = 'https://reqres.in';

  constructor(private http: HttpClient) { }

  getUsers() {
    // el operador map permite convertir los datos devueltos
    // en este caso seleccionar que datos se van a devolver
    return this.http.get(`${this.domain_url}/api/users?per_page=6`)
      .pipe(
        map( resp => {
          return resp['data'];
        })
      );
  }
}
