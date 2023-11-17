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
  const [iconDelete, seticonDelete] = useState("https://res.cloudinary.com/dths6glis/image/upload/v1700233744/Restaurant/Public_icons/MaterialSymbolsDeleteOutlineRounded_bydl0g.svg");

  const [iconMenu, seticonMenu] = useState("https://res.cloudinary.com/dths6glis/image/upload/v1699809558/Restaurant/Public_icons/Group_498_xwk8wg.svg");
  const [iconCarr, seticonCarr] = useState("https://res.cloudinary.com/dths6glis/image/upload/v1699802124/Restaurant/Public_icons/BytesizeCart_iah6s6.svg");
  const [iconEye, seticonEye] = useState("  https://res.cloudinary.com/dths6glis/image/upload/v1699802120/Restaurant/Public_icons/PhEyeLight_isthts.svg");
  


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
    tiktok,
    iconCarr,
    iconEye,
    iconDelete
  };
}
