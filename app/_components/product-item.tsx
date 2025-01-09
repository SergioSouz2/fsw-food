import { Prisma, Product } from "@prisma/client";
import Image from "next/image";
import { calculateProductTotalPrice, formatCurrency } from "../_heapers/price";
import { ArrowDown, ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
   product: Prisma.ProductGetPayload<{
      include: {
         restaurant: true;

      }
   }>
}

const ProductItem = ({ product }: ProductItemProps) => {
   return (
      <div className=" w-[150px] min-w-[150px] space-y-2 " >

         <div className="h-[150px] w-full relative">
            <Image
               fill
               src={product.imageUrl}
               alt={product.name}
               className="object-cover rounded-lg shadow-md"
            />


            {product.discountPercentage && (
               <div className="absolute gap-[2px] left-2 top-2 bg-primary px-2 py-[2px] rounded-full text-white flex items-center">
                  <ArrowDownIcon size={12} />
                  <span className="font-semibold text-xs">{product.discountPercentage}% </span>
               </div>
            )}
         </div>


         <div>
            <h2 className="text-sm">{product.name}</h2>
            <div className="flex gap-1 items-center">
               <h3 className="font-semibold">
                  {
                     formatCurrency(calculateProductTotalPrice(product))
                  }
               </h3>
               <span className="text-muted-foreground line-through text-xs">
                  {formatCurrency(Number(product.price))}
               </span>
            </div>
            <span className="text-xs text-muted-foreground block">{product.restaurant.name}</span>

         </div>
      </div>
   );
}

export default ProductItem;