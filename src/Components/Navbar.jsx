import logo from "../assets/home.png"
import BurgerButton from "./Burgerbutton"

export function Navbar(){
   
    return <>
    <div className="flex justify-between items-center">
        <div className="font flex justify-start text-3xl gap-2 items-end p-8 cursor-cell">
            <div className="font-bold">My Portfolio</div>
            <div className="font-semibold"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></div>
        </div>
        <div>
            <img src={logo} alt="" className=" lg:block lg:w-10 lg:h-10 lg:mr-44 cursor-none hidden"/>
        </div>
        <div className="mr-10">
          <BurgerButton/>
        </div>
        
    </div>
    </>
}