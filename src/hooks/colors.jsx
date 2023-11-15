import { useState } from "react";

export const UseColors = () => {

  const [primaryColor, setprimaryColor] = useState("!bg-[#FFC448]");
  const [secondColor, setsecondColor] = useState("#7AB5FB");
  const [widthIcons, setwidthIcons] = useState("20px");
  const [contentGlobal, setcontentGlobal] = useState("!w-[88%] m-auto");
  const [fb, setfb] = useState("https://res.cloudinary.com/dths6glis/image/upload/v1699891970/Restaurant/Public_icons/Social/Vector-1_dqz3fw.svg");
  const [ig, setig] = useState("https://res.cloudinary.com/dths6glis/image/upload/v1699891970/Restaurant/Public_icons/Social/Vector_fghywx.svg");
  const [tiktok, settiktok] = useState("https://res.cloudinary.com/dths6glis/image/upload/v1699892016/Restaurant/Public_icons/Social/Group_wlibal.svg");


  const [iconPhone, seticonPhone] = useState("https://res.cloudinary.com/dths6glis/image/upload/v1699808308/Restaurant/Public_icons/Vector-2_toscdh.svg");
  const [iconuser, seticonuser] = useState("https://res.cloudinary.com/dths6glis/image/upload/v1699808308/Restaurant/Public_icons/Vector_zerrd8.svg");
  const [iconBuy, seticonBuy] = useState("https://res.cloudinary.com/dths6glis/image/upload/v1699808782/Restaurant/Public_icons/Vector_ws6zol.svg");

  const [iconMenu, seticonMenu] = useState("https://res.cloudinary.com/dths6glis/image/upload/v1699809558/Restaurant/Public_icons/Group_498_xwk8wg.svg");



  return {
    primaryColor,
    iconMenu,
    secondColor,
    iconPhone,
    iconuser,
    iconBuy,
    widthIcons,
    contentGlobal,
    fb,
    ig,
    tiktok
  };
}
