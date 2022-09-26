import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Post } from 'src/app/Models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  constructor(private _postService: PostService) { }

  ngOnInit(): void {
    this._postService.getPosts().subscribe( (res: Post[]) => {
      this.dataSource = new MatTableDataSource<Post>([...res]);
      this.dataSource.paginator = this.paginator;
    }
      
    );
  }

  ngAfterViewInit() {
    
  }

}
