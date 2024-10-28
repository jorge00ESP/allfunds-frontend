import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { New } from 'src/app/shared/interfaces/news';
import { NodeResponse } from 'src/app/shared/interfaces/nodeResponse';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input() window: number = 1;

  news: New[] = [];

  constructor(private newService: NewsService){}

  ngOnInit(): void {

    if(this.window == 1){
      this.newService.getNews().subscribe({
        next: (data: any) => this.news = data.data,
        error: (error: any) => console.error(error)
      })

    }else if(this.window == 2){

      this.newService.getArchiveNew().subscribe({
        next: (data: any) => this.news = data.data,
        error: (error: any) => console.error(error)
      })
    }
  }

  archiveNew(id: string){

    if(confirm('¿Estas seguro de que quieres archivar esta noticia?')){
      this.newService.archiveNew(id).subscribe({
        next: (data: any) => {

          const indexNew = this.news.findIndex((i) => i._id == id);
          this.news.splice(indexNew, 1);

        },
        error: (error: any) => console.error(error)
      })
    }
  }

  removeNew(id: string){

    if(confirm('¿Estas seguro de que quieres borrar esta noticia?')){
      this.newService.deleteNew(id).subscribe({
        next: (data: any) => {

          const indexNew = this.news.findIndex((i) => i._id == id);
          this.news.splice(indexNew, 1);

        },
        error: (error: any) => console.error(error)
      })
    }
  }

}
