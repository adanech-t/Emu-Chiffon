import hoodie from "../util/one.jpg";
import chiffon2 from "../util/two.jpg";
import chiffon3 from "../util/three.jpg";
import chiffon4 from "../util/four.jpg";

export default function useItems() {
  const items = [
    { img: hoodie, name: "1", price: "1" },
    { img: chiffon2, name: "Chiffon Dress", price: "45.00" },
    { img: chiffon3, name: "Summer Top", price: "35.00" },
    { img: chiffon4, name: "4", price: "65.00" },
    { img: chiffon2, name: "Chiffon Dress", price: "45.00" },
    { img: chiffon3, name: "Summer Top", price: "6" },
    { img: chiffon4, name: "Casual Jacket", price: "65.00" },
    { img: chiffon3, name: "8", price: "35.00" },
    { img: chiffon4, name: "Casual Jacket", price: "65.00" },
    { img: chiffon2, name: "Chiffon Dress", price: "45.00" },
    { img: chiffon3, name: "Summer Top", price: "35.00" },
    { img: chiffon4, name: "12", price: "65.00" },
  ];
  return items;
}
