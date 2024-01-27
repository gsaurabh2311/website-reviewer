import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
export function Navbar() {
    const navLinks = [
        {name: 'Features'},
        {name: 'Pricing'},
        {name: 'Enterprise'},
        {name: 'Careers'},
    ]
  return (
    <nav className="flex items-center w-full justify-between px-[20px] py-[16px] lg:container lg:mx-auto">
      <div className="flex gap-x-[74px]">
        <Image src={Logo} alt="Logo" />
        <div className="hidden lg:flex items-center gap-x-[56px]">
            {
                navLinks.map((item,idx)=> (
                    <ul>
                        <li className="font-medium text-[#36485C]" key={idx}>{item.name}</li>
                    </ul>
                ))
            }
        </div>
      </div>
      <div className="flex gap-x-5">
        <span className="hidden lg:block pr-[56px] text-[#36485C] font-medium">Open an Account</span>
        <div className="flex gap-x-[12px]">
        <Image src={User} alt="User" />
        <span className="hidden lg:block text-[#36485C] font-medium">Sign in</span>
        <Image className="lg:hidden" src={Menu} alt="Menu" />
        </div>
      </div>
    </nav>
  );
}
