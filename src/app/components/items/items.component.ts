import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [{
    name: "Salmon - Canned",
    price: "$91.56",
    info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    infoIsShow: false,
    index: 0,
    review: [
      {
        name: "Denis",
          text: "Some review text"
      }
    ]
  },
  {
    name: "Soup - Beef, Base Mix",
    price: "$126.14",
    info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    infoIsShow: false,
    index: 1,
    review: [
      {
        name: "Ivan",
          text: "Some review text"
      },
      {
        name: "Maks",
          text: "Some review text"
      }
    ]
  }];

  constructor() { }

  ngOnInit() {
  }

  toggleInfoBlock(index) {
    this.items[index].infoIsShow = !this.items[index].infoIsShow;
  }
  
  removeItem(index) {
    this.items = this.items.filter(item => item.index !== index);
  }
}