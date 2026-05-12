
import { useSelector } from "react-redux";
import RestaurentItemList from "./RestaurentItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/cartSlice";
export default function CartDetails(items){



const cartItems=useSelector((store)=>store.cart.items);
const dispatch =useDispatch();

const handleClearCart=()=>{

   dispatch(clearCart());

}


  return (
    <div className="text-center m-5 p-5">

        <h1 className="text-2xl font-bold">Cart Details</h1>

        <div className="w-6/12 mx-auto">

              <button className="p-2 m-2 border  bg-red-500 text-white font-semibold   cursor-pointer rounded-lg" onClick={handleClearCart}>
                Clear Cart
              </button>


              {cartItems.length === 0 &&
                <h2 className="text-xl font-semibold">Your cart is empty.</h2>
              }     

           <RestaurentItemList items={cartItems} />
          
           </div>
 


      </div>
  )
}