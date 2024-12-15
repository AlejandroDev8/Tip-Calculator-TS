import { formatCurrency } from "../helpers"
import { MenuItemsType, OrderItemType } from "../types"

type OrderContentsProps = {
  order: OrderItemType[]
  removeItem: (id: MenuItemsType['id']) => void
  increaseQuantity: (id: MenuItemsType['id']) => void
  decreaseQuantity: (id: MenuItemsType['id']) => void
}

export const OrderContents = ({order, removeItem, increaseQuantity, decreaseQuantity} : OrderContentsProps) => {
  return (
    <div>
      <h2 className="text-4xl font-black">Consumo</h2>
      <div className="space-y-3 mt-10">
        {order.length === 0 ? <p className="text-center">No hay ordenes actualmente</p> : 
          (order.map(item =>(
            <div key={item.id} className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                </p>
                </div>
                <div className="flex justify-between items-center space-x-3">
                <button 
                  className="bg-green-600 h-8 w-8 rounded-full text-white font-black hover:bg-green-700 items-center"
                  onClick={() => increaseQuantity(item.id)}
                  >
                    +
                </button>
                <button
                  className="bg-yellow-600 h-8 w-8 rounded-full text-white font-black hover:bg-yellow-700"
                  onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                </button>
                <button 
                  className="bg-red-600 h-8 w-8 rounded-full text-white font-black hover:bg-red-700"
                  onClick={() => removeItem(item.id)}
                  >
                    X
                </button>
                </div>
            </div>
          )))}
      </div>
    </div>
  )
}