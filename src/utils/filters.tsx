import { FoodItem } from "../../types"
import { useStateValue } from "../context/StateProvider"

export const FilterFood = (category:string) => {
    const [{foodItems}, dispatch] = useStateValue()
    return foodItems?.filter((item:FoodItem) => item.category.toLowerCase() === category.toLowerCase())
}

export const GetFoodById = (id: number) => {
    const [{foodItems}, dispatch] = useStateValue()
    return foodItems?.find((item:FoodItem) => item.id === id)
}
export const GetCartItemsByOid = (oid:number) => {
    const [{cartItems}, dispatch] = useStateValue()
    return cartItems?.filter((item:any) => item.oid === oid)
}