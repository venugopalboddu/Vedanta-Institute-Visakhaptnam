import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private ht: HttpClient) { }

  postData(d: { name: any; email: any; message: any; }) {
    return this.ht.post('https://www.vedantavisakhapatnam.org/vedanta1.php', d);
  }
postData1(d: { name: any; email: any; message: any; }) {
  return this.ht.post('https://www.vedantavisakhapatnam.org/vedanta2.php', d);
 }
}
