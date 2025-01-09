
import { log } from "console";
import { db } from "../_lib/prisma";
import ProductItem from "./product-item";
import { Button } from "./ui/button";

const ProductList = async () => {
   const products = await db.product.findMany({
      where: {
         discountPercentage: {
            gt: 0,
         }
      },
      take: 10,
      include: {
         restaurant: true
      }

   })



   return (
      <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden gap-4 px-5 w-auto">
         {products.map((product) => (
            <ProductItem
               key={product.id}
               product={product}
            />
         ))
         }
      </div>
   );
}



export default ProductList;