export interface Responsive {
  [key: string]: {
    breakpoint: { max: number; min: number };
    items: number;
  };
}
