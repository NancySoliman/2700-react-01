<<<<<<< HEAD
import { Button } from "./components/Buttons";
import logo from "./assets/logo.png";


export default function Header() {
  return (
    <header className="flex justify-between  items-center p-2 h-20 bg-orange-900">
      <div className="flex justify-between items-center gap-2" >
        <img src={logo} alt="" className="w-10 h-10 rounded-full " />
        <h3 className="text-white"> Sama Flowers</h3>
      </div>
      <div>
        <ul className="flex justify-between items-center x ">
          <li >
            <a href="" className="text-white me-2  no-underline   text-sm ">Home</a>
          </li>
          <li>
            <a href="" className="text-white me-2 no-underline  text-sm">Our service</a>
          </li>
          <li>
            <a href="" className="text-white me-2 no-underline  text-sm ">About</a>
          </li>
          <li>
            <a href="" className="text-white  no-underline  text-sm">Contact us</a>
          </li>
        </ul>
      </div>
      <div>
        <Button text="log in"></Button>
      <Button text="register"></Button>
      </div>
      
    </header>
  );
}
=======
import Button from './Buttons';

export default function Header() {

    const appName = 'The Company'

    return (
        <header>
            <h1>{appName}</h1>


            <div>
                <Button text='Subscripe'></Button>
                <Button text='Register Now'></Button>
            </div>
        </header>
    );
}
>>>>>>> ba346f972aba7f4e66a913dacf6c56cfba6bbf5e
