import Header from "./_components/header";
import Search from "./_components/search";

export default function Home() {
   return (
      <div className="px-5">
         <Header />
         <div className="pt-6">
            <Search />
         </div>
      </div >
   );
}
