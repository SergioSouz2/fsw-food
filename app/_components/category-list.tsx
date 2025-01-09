import { Category } from "@prisma/client";
import { db } from "../_lib/prisma";
import CategoryItem from "./category-item";

interface CategoryListProps {
   categories: Category[];
}


const CategoryList = async ({ categories }: CategoryListProps) => {


   return (
      // <div className="grid grid-cols-2 gap-3">
      <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden px-5 gap-3 w-auto">
         {
            categories.map((category) => (
               <CategoryItem
                  category={category}
               />
            ))
         }
      </div >
   );
}

export default CategoryList;