interface ICar {
  title: string;
  img: string;
  price: string;
  description: string;
  location: string;
  distance: string;
}

interface IMenuItem {
  name: string;
  icon: string;
}

export type { ICar, IMenuItem };
