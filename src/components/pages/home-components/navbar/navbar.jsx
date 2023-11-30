import { Button } from "../../../common/button/Button";

export const Navbar = () => {
  return (
    <div className="mt-6 flex justify-between">
      <div className="">
        <span className="text-[36px] font-bold text-blue">Socielity</span>
      </div>
      <div className="flex gap-9 items-center">
        <ul className="flex gap-10">
          <li><a href="#" className="text-[16px] text-gray font-bold">Socielity</a></li>
          <li><a href="#" className="text-[16px] text-gray font-bold">Resources</a></li>
          <li><a href="#" className="text-[16px] text-gray font-bold">Platform</a></li>
          <li><a href="#" className="text-[16px] text-gray font-bold">Support</a></li>
          <li><a href="#" className="text-[16px] text-gray font-bold">Login</a></li>
        </ul>
        <Button type="type1">Explore more</Button>
      </div>
    </div>
  ); -``
};
