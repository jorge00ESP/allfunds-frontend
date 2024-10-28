import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../shared/GlobalConstants';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsUrl: string = GlobalConstants.backendUrl + '/news/';

  constructor(private http: HttpClient) {}

  getNews(){
    return this.http.get(this.newsUrl);
  }

  getArchiveNew(){
    return this.http.get(this.newsUrl + '/archived');
  }

  createNew(title: string, description: string, content: string, author: string){

    const body = {
      title: title,
      description: description,
      content: content,
      author: author
    }

    return this.http.post(this.newsUrl, body);
  }

  archiveNew(id: string){
    return this.http.patch(this.newsUrl + id, {});
  }

  deleteNew(id: string){
    return this.http.delete(this.newsUrl + id, {});
  }
}
