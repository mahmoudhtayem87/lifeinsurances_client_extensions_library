import {Component, Input, OnInit} from '@angular/core';
import {headless_deliveryService} from "../../../../services/headless-delivery";

@Component({
  selector: 'article-total-comments',
  templateUrl: './total-comments.component.html',
  styleUrls: ['./total-comments.component.css']
})
export class TotalCommentsComponent  implements OnInit {

  @Input('articleId')
  public articleKey : any;
  public isLoading : boolean = false;
  public totalCount:any;
  constructor(private lfrSrv : headless_deliveryService) {
  }

  ngOnInit(): void {
    this.getTotalCommentsCount();
  }

  async getTotalCommentsCount()
  {
    try {
      let articleId = parseInt(this.articleKey) + 2;
      this.isLoading = true;
      // @ts-ignore
      this.totalCount = (await this.lfrSrv.getStructuredContentCommentsPage(articleId,null,null,
          null,null,null,0))["totalCount"];
      this.isLoading = false;
      console.log(this.totalCount);
    }catch (exp)
    {
      this.isLoading = false;
      this.totalCount=0;
      console.log(exp);
    }
  }

}
