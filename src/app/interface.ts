export class Ticket {
  price: number;
  carrier: string;
  segments: Segment[];
}

export class Segment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

export class Tickets {
  stop: boolean;
  tickets: Ticket[];
}

export class Search {
  searchId: string;
}
