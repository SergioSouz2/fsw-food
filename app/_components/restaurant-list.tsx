import { Restaurant } from "@prisma/client";
import RestaurantItem from "./restaurant-item";

interface RestaurantListProps {
   restaurants: Restaurant[];
}

const RestaurantList = async ({ restaurants }: RestaurantListProps) => {
   return (
      <div className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
         {
            restaurants.map((restaurant) => (
               <RestaurantItem restaurant={restaurant} key={restaurant.id} />
            ))
         }
      </div>
   );
}

export default RestaurantList;