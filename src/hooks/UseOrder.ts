import {useState} from 'react'
import type { MenuItemsType, OrderItemType } from '../types'

export default function UseOrder() {
  
  const [order, setOrder] = useState<OrderItemType[]>([])

  const addItem = (item: MenuItemsType) => {

    const intemExist = order.find(orderItem => orderItem.id === item.id)

    if(intemExist) {
      const updatedOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
      setOrder(updatedOrder)
    } else {
      const newItem: OrderItemType = {...item, quantity: 1}
      setOrder([...order, newItem])
    }
  }

  const removeItem = (id: MenuItemsType['id']) => {
    setOrder(order.filter(orderItem => orderItem.id !== id))
  }
  
  return {
    order,
    addItem,
    removeItem
  }
}