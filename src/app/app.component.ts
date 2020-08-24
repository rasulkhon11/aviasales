import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Search, Ticket, Tickets } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCheapActive = true;
  tickets: Array<Ticket>;
  filteredTickets: Array<Ticket>;
  transfer = [
    {
      value: 1,
      checked: false
    },
    {
      value: 2,
      checked: false
    },
    {
      value: 3,
      checked: false
    },
    {
      value: 4,
      checked: false
    },
    {
      value: 5,
      checked: false
    }
  ];

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.api.getData().subscribe((result: Search) => {
      this.getTickets(result.searchId);
    });
  }

  getTickets(searchId) {
    this.api.getTickets(searchId).subscribe((result: Tickets) => {
      this.tickets = result.tickets;
      this.getFilteredTickets(this.isCheapActive);
    });
  }

  getFilteredTickets(isCheapActive) {
    let transferArray = [];
    this.isCheapActive = isCheapActive;
    this.filteredTickets = this.tickets;
    this.filteredTickets = this.filteredTickets.sort((a, b) => {
      let first = 0;
      let second = 0;
      if (isCheapActive) {
        first = a.price;
        second = b.price;
      } else {
        a.segments.forEach(item => first += item.duration);
        b.segments.forEach(item => second += item.duration);
      }
      if (first > second) {
        return 1;
      }
      if (first < second) {
        return -1;
      }
      return 0;
    });
    this.transfer.forEach((trans, i) => {
      if (trans.checked) {
        if (i === 0) {
          transferArray = [0, 1, 2, 3];
        }
        if (transferArray.length === 4) {
          return;
        } else {
          transferArray.push(i - 1);
        }
      }
    });
    if (transferArray.length > 0) {
      this.filteredTickets = this.filteredTickets.filter(item => item.segments.some(i => transferArray.includes(i.stops.length)));
    } else {
      this.filteredTickets = [];
    }
    this.filteredTickets = this.filteredTickets.filter((item, i) => i < 5);
  }

  onChecked(categories) {
    categories.forEach((item, i) => {
      this.transfer[i].checked = item.checked;
    });
    this.getFilteredTickets(this.isCheapActive);
  }
}
