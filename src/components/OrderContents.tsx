import { OrderItemType } from "../types"

type OrderContentsProps = {
  order: OrderItemType[]
}

export const OrderContents = ({order} : OrderContentsProps) => {
  return (
    <div>
      <h2 className="text-4xl font-black">Consumo</h2>
      <div className="space-y-3 mt-5">
        {order.length === 0 ? <p className="text-center">No hay ordenes actualmente</p> : 
          (order.map(item =>(
            <div key={item.id} className="flex justify-between">
                <p>
                  {item.name} - {item.quantity} - {item.price}
                </p>
            </div>
          )))}
      </div>
    </div>
  )
}