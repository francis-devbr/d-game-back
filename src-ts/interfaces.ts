export interface Player {
  id: string;
  name: string;
  seed: string;
  socketID: string;
  deck: Deck;
  cards: Card[];
}

export interface Deck {
  id: string;
  name: string;
  img: string;
  cards: Card[];
}

export interface Card {
  id?: string;
  digit?: number;
  color?: "red" | "blue" | "green" | "yellow" | "black";
  image?:"";
  action?: "reverse" | "skip" | "draw two" | "draw four" | "wild";
}
