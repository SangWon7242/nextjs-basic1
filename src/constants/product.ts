import { IMAGES } from "./images";
import { SubCardItems, SelectItems, WonderFiItem } from "@/types/product.types";

export const SUB_CARD_ITEMS: SubCardItems[] = [
  {
    id: 1,
    itemImage: IMAGES.shopKo2Image,
    wifi: IMAGES.wifiImage,
    title: "하루 2GB+고속무제한",
    percent: 18,
    price: "월 38,900원 ~",
    width: "98px",
  },
  {
    id: 2,
    itemImage: IMAGES.shopKo3Image,
    wifi: IMAGES.wifiImage,
    title: "월 40GB 고속",
    percent: 12,
    price: "월 27,900원 ~",
    width: "65px",
  },
  {
    id: 3,
    itemImage: IMAGES.shopKo4Image,
    wifi: IMAGES.wifiImage,
    title: "속도저하없는 고속무제한",
    percent: 8,
    price: "월 55,900원 ~",
    width: "100px",
  },
];

export const SELECT_ITEMS: SelectItems[] = [
  {
    id: 1,
    image: IMAGES.select1Image,
    title: "HomeFi",
    subTitle: "국내 홈와이파이",
  },
  {
    id: 2,
    image: IMAGES.select2Image,
    title: "WiFi",
    subTitle: "국내 포켓와이파이",
  },
  {
    id: 3,
    image: IMAGES.select3Image,
    title: "HomeFi",
    subTitle: "해외 포켓와이파이",
  },
];

export const WONDERFI_ITEMS: WonderFiItem[] = [
  {
    id: 1,
    itemImage: IMAGES.shopInit2Image,
    wonderFi: IMAGES.wonderFiImage,
    title: "일본 원더파이",
    date: "일 3GB / 무제한",
    price: "일 3,300원 ~",
  },
  {
    id: 2,
    itemImage: IMAGES.shopInit3Image,
    wonderFi: IMAGES.wonderFiImage,
    title: "베트남 원더파이",
    date: "완전 무제한",
    price: "일 3,900원",
  },
];
