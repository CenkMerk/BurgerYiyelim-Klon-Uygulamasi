import Cheeseburger from "./Img/cheeseburger.jpg";
import Citirpeynir from "./Img/citirpeynir4adet.jpg";
import Cola from "./Img/cola.jpg";
import Efsanatavukburgermenu from "./Img/efsanatavukburgermenu.jpg";
import Falafelbomba from "./Img/falafelbomba.png";
import Fanta from "./Img/fanta.jpg";
import Kankamenu from "./Img/kankamenu.jpg";
import Kasapburger from "./Img/kasapburger.jpg";
import Magnolia from "./Img/magnolia.png";
import Mediumburger from "./Img/mediumburger.jpg";
import Mediumburgermenu from "./Img/mediumburgermenu.jpg";
import Mediumcheeseburger from "./Img/mediumcheeseburger.jpg";
import Mediumcheeseburgermenu from "./Img/mediumcheeseburgermenu.jpg";
import Mediumkasapburger from "./Img/mediumkasapburger.jpg";
import Mexicanburger from "./Img/mexicanburger.jpg";
import Nugget from "./Img/nugget4adet.png";
import Nuggetbomba from "./Img/nuggetbomba.png";
import Patetesbomba from "./Img/patetesbomba.png";
import Soganhalkasi from "./Img/soganhalkasi6adet.jpg";
import Sprite from "./Img/sprite.jpg";
import Super3luetmenu from "./Img/super3luetmenu.jpg";
import Super3lutavukmenu from "./Img/super3lutavukmenu.jpg";
import { ImSpoonKnife } from "react-icons/im";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiHamburger } from "react-icons/gi";
import { TbSalad } from "react-icons/tb";
import { CiIceCream } from "react-icons/ci";
import { GiSodaCan } from "react-icons/gi";

const UrunlerData = [
  {
    id: "Kategori1",
    KategoriAdi: "Patetes Bomba",
    Ikon: <ImSpoonKnife size={18} />,
    Urunler: [
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Patetes Bomba",
        Fiyati: "50",
        Img: <Patetesbomba />,
      },
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Falafel Bomba",
        Fiyati: "52",
        Img: <Falafelbomba />,
      },
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Nugget Bomba",
        Fiyati: "55",
        Img: <Nuggetbomba />,
      },
    ],
  },
  {
    id: "Kategori2",
    KategoriAdi: "Süper Avantajlı Menüler",
    Ikon: <IoFastFoodOutline size={18} />,
    Urunler: [
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Kanka Menü",
        Fiyati: "220",
        Img: <Kankamenu />,
      },
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Süper 3lü Tavuk Menü",
        Fiyati: "320",
        Img: <Super3lutavukmenu />,
      },
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Süper 3lü Et Menü",
        Fiyati: "330",
        Img: <Super3luetmenu />,
      },
    ],
  },
  {
    id: "Kategori3",
    KategoriAdi: "Avantajlı Menüler",
    Ikon: <IoFastFoodOutline size={18} />,
    Urunler: [
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Efsana Tavuk Burger Menü",
        Fiyati: "122",
        Img: <Efsanatavukburgermenu />,
      },
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Medium Burger Menü",
        Fiyati: "122",
        Img: <Mediumburgermenu />,
      },
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Medium Cheese Burger Menü",
        Fiyati: "128",
        Img: <Mediumcheeseburgermenu />,
      },
    ],
  },
  {
    id: "Kategori4",
    KategoriAdi: "Burgerler",
    Ikon: <GiHamburger size={18} />,
    Urunler: [
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Medium Burger",
        Fiyati: "98",
        Img: <Mediumburger />,
      },
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Medium Cheese Burger",
        Fiyati: "104",
        Img: <Mediumcheeseburger />,
      },
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Medium Kasap Burger",
        Fiyati: "106",
        Img: <Mediumkasapburger />,
      },
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Cheese Burger",
        Fiyati: "119",
        Img: <Cheeseburger />,
      },
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Kasap Burger",
        Fiyati: "122",
        Img: <Kasapburger />,
      },
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Mexicano Burger",
        Fiyati: "122",
        Img: <Mexicanburger />,
      },
    ],
  },
  {
    id: "Kategori5",
    KategoriAdi: "Atıştırmalıklar",
    Ikon: <TbSalad size={18} />,
    Urunler: [
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Nugget (4 Adet)",
        Fiyati: "30",
        Img: <Nugget />,
      },
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Çıtır Peynir (4 Adet)",
        Fiyati: "37",
        Img: <Citirpeynir />,
      },
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Soğan Halkası",
        Fiyati: "6 Adet",
        Img: <Soganhalkasi />,
      },
    ],
  },
  {
    id: "Kategori6",
    KategoriAdi: "Dondurma",
    Ikon: <CiIceCream size={18} />,
    Urunler: [
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Magnolia Oreolu",
        Fiyati: "32",
        Img: <Magnolia />,
      },
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Magnolia Muzlu",
        Fiyati: "32",
        Img: <Magnolia />,
      },
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Magnolia Çilekli",
        Fiyati: "32",
        Img: <Magnolia />,
      },
    ],
  },
  {
    id: "Kategori7",
    KategoriAdi: "İçecekler",
    Ikon: <GiSodaCan size={18} />,
    Urunler: [
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Coca-Cola",
        Fiyati: "27",
        Img: <Cola />,
      },
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Sprite",
        Fiyati: "27",
        Img: <Sprite />,
      },
      {
        id: Math.round(Math.random() * 999999),
        UrunAdi: "Fanta",
        Fiyati: "27",
        Img: <Fanta />,
      },
    ],
  },
];

export default UrunlerData;
