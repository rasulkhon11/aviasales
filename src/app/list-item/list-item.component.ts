import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() ticket: Ticket;
  constructor() { }

  ngOnInit(): void {
  }

}
