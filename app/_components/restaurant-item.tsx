import { Restaurant } from "@prisma/client";
import { read } from "fs";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_heapers/price";
import { Button } from "./ui/button";

interface RestaurantItemProps {
   restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
   return (
      <div className="min-w-[266px] max-w-[266px] space-y-3">
         <div className="relative h-[136px] w-full">
            <Image
               src={restaurant.imageUrl}
               alt={restaurant.name}
               fill
               className="object-cover rounded-lg "
            />


            <div className="absolute gap-[2px] left-2 top-2 bg-primary px-2 py-[2px] rounded-full bg-white flex items-center">
               <StarIcon size={12} className="text-yellow-500 fill-yellow-500" />
               <span className="font-semibold text-xs">5.0 </span>
            </div>

            <Button className="absolute right-2 top-2 h-7 w-7 rounded-full bg-foreground">
               <HeartIcon size={14} className="fill-white " />

            </Button>


         </div>
         <div>
            <h2 className="text-sm font-semibold">{restaurant.name}</h2>
            <div className="flex gap-3">
               <div className="flex gap-1 items-center">
                  <BikeIcon size={14} className="text-primary" />
                  <span className="text-xs text-muted-foreground">{
                     Number(restaurant.deliveryFee) === 0
                        ? "Entrega grátis"
                        : formatCurrency(Number(restaurant.deliveryFee))
                  }</span>
               </div>
               <div className="flex gap-1 items-center">
                  <TimerIcon size={14} className="text-primary" />
                  <span className="text-xs text-muted-foreground">
                     {restaurant.deliveryTimeMinutes} min
                  </span>
               </div>
            </div>
         </div>

      </div>

   );
}

export default RestaurantItem;