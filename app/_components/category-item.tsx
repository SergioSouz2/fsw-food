import Image from "next/image";
import { Button } from "./ui/button";
import { Category } from "@prisma/client";
import { Card } from "./ui/card";

interface CategoryItemProps {
   category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
   return (
      <div className="flex items-center gap-3 py-3 px-3  rounded-full shadow-md bg-white " >
         <Image
            src={category.imageUrl}
            alt={category.name}
            width={20}
            height={20}
         />
         <span className=" text-[12px] font-semibold">{category.name}</span>
      </div>
   );
}

export default CategoryItem;