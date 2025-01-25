import hoodie from "../util/one.jpg";
import chiffon2 from "../util/two.jpg";
import chiffon3 from "../util/three.jpg";
import chiffon4 from "../util/four.jpg";

export default function useItems() {
  const items = [
    { img: hoodie, name: "Chiffon Dress", price: "10,000" },
    { img: chiffon2, name: "Chiffon Dress", price: "10,000" },
    { img: chiffon3, name: "Chiffon Dress", price: "10,000" },
    { img: chiffon4, name: "Chiffon Dress", price: "10,000" },
    { img: chiffon2, name: "Chiffon Dress", price: "10,000" },
    { img: chiffon3, name: "Chiffon Dress", price: "10,000" },
    { img: chiffon4, name: "Chiffon Dress", price: "10,000" },
    { img: chiffon3, name: "Chiffon Dress", price: "10,000" },
    { img: chiffon4, name: "Casual Jacket", price: "10,000" },
    { img: chiffon2, name: "Chiffon Dress", price: "10,000" },
    { img: chiffon3, name: "Chiffon Dress", price: "10,000" },
    { img: chiffon4, name: "Chiffon Dress", price: "10,000" },
  ];
  return items;
}
