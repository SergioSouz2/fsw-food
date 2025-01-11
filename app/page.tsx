import { db } from "./_lib/prisma";
import { ChevronRight } from "lucide-react";

import Header from "./_components/header";
import Search from "./_components/search";
import { Button } from "./_components/ui/button";
import ProductList from "./_components/product-list";
import PromoBanner from "./_components/promo-banner";
import CategoryList from "./_components/category-list";
import RestaurantList from "./_components/restaurant-list";


export default async function Home() {

   const categories = await db.category.findMany({})
   const restaurants = await db.restaurant.findMany({ take: 10 })
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
            <PromoBanner
               alt="Até 30% de desconto em pizzas!"
               src={'/banner_pizza.png'}
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
            <PromoBanner
               alt="A partir de R$17,00 em lanches"
               src={'/banner_burguer.png'}
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


         <div className=" pt-6 pb-6">
            <RestaurantList restaurants={restaurants} />
         </div>

      </div >
   );
}
