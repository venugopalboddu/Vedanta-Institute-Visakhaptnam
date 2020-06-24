import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private ht: HttpClient) { }

  postData(d) {
    return this.ht.post('http://vedantavisakhapatnam.org/vedanta1.php', d);
  }
postData1(d) {
  return this.ht.post('http://vedantavisakhapatnam.org/vedanta2.php', d);
 }
}
