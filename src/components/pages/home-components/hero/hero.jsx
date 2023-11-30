import { Button } from "../../../common/button/Button";
import { FaYoutube } from "react-icons/fa";
// import { Icons } from "../../../../../mock-imges/icons/index";

export const Hero = () => {
  return (
    <div className="mt-[125px] text-center flex flex-col gap-[38px]">
      <h1 className="font-bold text-gray-title text-[56px]">Your Private Online Marketplace Where Socielities That Comprise Your Personal World</h1>
      <p className="text-gray">Your private online marketplace where you can trade goods and services with family, friends, neighbors, classmates, co-workers, and members of the many other communities that comprise your personal world.</p>
      <Button type={"type1"}>Explore more</Button>
      <div className="flex gap-[11px] items-center justify-center">
        <FaYoutube className=" text-red-500" />
        <a href="#" className=" border-b-2">Let's have a look</a>
      </div>
    </div>
  );
};
