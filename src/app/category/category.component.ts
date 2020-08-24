import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories = CATEGORIES;
  @Output() checked = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  check(e, categoryId) {
    this.categories[categoryId - 1].checked = e.target.checked;
    if (categoryId === 1) {
        this.categories.forEach(item => item.checked = e.target.checked);
    } else {
      if (!e.target.checked) {
        this.categories[0].checked = false;
      } else {
        if (this.categories.filter((item, i) => i !== 0).every(item => item.checked)) {
          this.categories[0].checked = true;
        }
      }
    }
    this.checked.emit(this.categories);
  }

}

export const CATEGORIES = [
  {
    name: 'Все',
    checked: false,
    id: 1,
  },
  {
    name: 'Без пересадок',
    checked: false,
    id: 2,
  },
  {
    name: '1 пересадка',
    checked: false,
    id: 3,
  },
  {
    name: '2 пересадки',
    checked: false,
    id: 4,
  },
  {
    name: '3 пересадки',
    checked: false,
    id: 5,
  }
];
