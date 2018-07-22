import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  
  items = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5', 'Tab 6'];
  titles = [
    {
      id: 1,
      name: 'ПОДРОБНОСТИ ИНТЕГРАЦИИ С АВТОМОБИЛЕМ'
    }, 
    {
      id: 2,
      name: 'ОПИСАНИЕ'
    },
    {
      id: 3,
      name: 'ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ'
    },
    {
      id: 4,
      name: 'КОМПЛЕКТНОСТЬ'
    },
    {
      id: 5,
      name: 'ДОКУМЕНТАЦИЯ'
    }
  ];

  current: any = 1;
  titleId: number = 1;

  constructor() { }

  ngOnInit() {
  }

  onClick(item: any){
    console.log('item *** ', item);
    this.current = item;
    console.log('this.current **** ', this.current);
  }

  onClickTitles(title: any){
    console.log('title *** ', title);
    console.log('title.classList *** ', title.classList);
    this.titleId = title.id;
    console.log('this.titleId **** ', this.titleId);
  }

}
