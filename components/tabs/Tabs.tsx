import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import { LiaHomeSolid } from "react-icons/lia";
import { BsBag } from "react-icons/bs";
import Tab from "./Tab";

const Tabs = () => {
  return (
    <div className="absolute bottom-0 left-0 z-50 block w-screen border-t-2 py-2 lg:hidden">
      <div className="grid grid-cols-5">
        <Tab Icon={LiaHomeSolid} title="Bosh Sahifa" href="/" />
        <Tab Icon={IoSearchOutline} title="Katalog" href="/" />
        <Tab Icon={BsBag} title="Saralangan" href="/" />
        <Tab Icon={IoMdHeartEmpty} title="Savat" href="/" />
        <Tab Icon={BiUser} title="Kabinet" href="/" />
      </div>
    </div>
  );
};

export default Tabs;
