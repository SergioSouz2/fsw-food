
import { Prisma } from "@prisma/client";
import ProductItem from "./product-item";

interface ProductListProps {
   products: Prisma.ProductGetPayload<{
      include: {
         restaurant: true;

      }
   }>[];

}



const ProductList = async ({ products }: ProductListProps) => {
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