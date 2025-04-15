import { FaCartPlus } from "react-icons/fa";
import { BsCartDashFill } from "react-icons/bs";
export default function Conter() {
  return (
    <dev className="flex justify-center items-center gap-x-5 mt-5">
      <BsCartDashFill className="text-3xl text-green-800" />
      <span>counter</span>
      <FaCartPlus className="text-3xl  text-green-800" />
    </dev>
  );
}
