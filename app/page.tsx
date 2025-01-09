import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";

export default function Home() {
   return (
      <div className="px-5">
         <Header />
         <div className="pt-6">
            <Search />
         </div>

         <div className="pt-6">
            <CategoryList />
         </div>

         <div className="pt-6">
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

         <div className="pt-6">
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
      </div >
   );
}
