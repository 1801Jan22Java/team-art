import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImageService {

  constructor() { }

   //Evan
  
  
  // James
  
  
  // Eric
  
  
  // Gin
  // upload image
  postFormData(file: File) {
  return Observable.fromPromise(new Promise((resolve, reject) => {
  let formData: any = new FormData()
  let xhr = new XMLHttpRequest()
 
  formData.append("file", file, file.name)
 
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        resolve(xhr.response)
      } else {
        reject(xhr.response)
      }
    }
  }
  xhr.open("POST",   'http://localhost:8080/api/image/uploadImage', true);
  xhr.send(formData)
  }));
}
  
}
