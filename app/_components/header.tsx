import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
   return (
      <div className="flex justify-between pt-6">
         <Image src="/logo.png" alt="Fsw Foods" width={100} height={30} />
         <Button
            size={"icon"}
            variant={"outline"}
            className="border-none bg-transparent"
         >
            <MenuIcon size={20} />
         </Button>

      </div>
   );
}

export default Header;