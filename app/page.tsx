import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";
import ProductList from "./_components/product-list";
import { Button } from "./_components/ui/button";
import { ChevronRight } from "lucide-react";
import { db } from "./_lib/prisma";


export default async function Home() {

   const categories = await db.category.findMany({})


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
      <div >
         <Header />
         <div className="px-5 pt-6">
            <Search />
         </div>

         <div className=" pt-6">
            <CategoryList categories={categories} />
         </div>

         <div className="px-5 pt-6">
            <Image
               src={'/banner_pizza.png'}
               alt="Até 30% de desconto em pizzas!"
               width={0}
               height={0}
               className="w-full h-auto object-contain"
               sizes="100vw"
               quality={100}
            />
         </div>

         <div className="space-y-4 pt-6">
            <div className="px-5 flex justify-between items-center">
               <h2 className="font-semibold">Pedidos Recomendados</h2>
               <Button variant={"ghost"} className="text-primary p-0 hover:bg-transparent h-fit">Ver Todos
                  <ChevronRight size={16} />
               </Button>
            </div>
            <ProductList products={products} />
         </div>

         <div className=" px-5 pt-6">
            <Image
               src={'/banner_burguer.png'}
               alt="A partir de R$17,00 em lanches"
               width={0}
               height={0}
               className="w-full h-auto object-contain"
               sizes="100vw"
               quality={100}
            />
         </div>


         <div className="space-y-4 pt-6">
            <div className="px-5 flex justify-between items-center">
               <h2 className="font-semibold">Restaurantes Recomendados</h2>
               <Button variant={"ghost"} className="text-primary p-0 hover:bg-transparent h-fit">Ver Todos
                  <ChevronRight size={16} />
               </Button>
            </div>
         </div>


      </div >
   );
}
