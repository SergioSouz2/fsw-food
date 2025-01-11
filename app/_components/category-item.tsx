import Image from "next/image";
import { Category } from "@prisma/client";
import { Card } from "./ui/card";

interface CategoryItemProps {
   category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
   return (
      <Card className=" py-3 px-3  rounded-full bg-white" >
         <div className="flex items-center justify-center  gap-3 w-[140px] h-[30px]">
            <Image
               src={category.imageUrl}
               alt={category.name}
               width={30}
               height={30}
            />
            <span className=" text-sm font-semibold">{category.name}</span>
         </div>
      </Card>
   );
}

export default CategoryItem;