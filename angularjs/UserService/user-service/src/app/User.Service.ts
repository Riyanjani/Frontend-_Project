import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API="http://localhost:8080";
  public registerUser(userData: any)
  {
    return this.http.post(this.API + '/registerUser' , userData);
  }

  public getUsers(){
    return this.http.get(this.API+'/getUsers');
  }

  public deleteUser(C_id:any){
    return this.http.delete(this.API+'/deleteCusomter?C_id=' + C_id);
  }

  public updateUser(user: any){
    return this.http.put(this.API +'/updateUser', user);
  }
  constructor(private http: HttpClient) { }
}
