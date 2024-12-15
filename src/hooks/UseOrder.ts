import {useState} from 'react'
import type { MenuItemsType, OrderItemType } from '../types'

export default function UseOrder() {
  
  const [order, setOrder] = useState<OrderItemType[]>([])

  const addItem = (item: MenuItemsType) => {
    
    const newItem: OrderItemType = {...item, quantity: 1}

    setOrder([...order, newItem])
  }

  console.log(order)

  return {
    addItem
  }
}