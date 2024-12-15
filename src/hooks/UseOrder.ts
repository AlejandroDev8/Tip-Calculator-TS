import {useState} from 'react'
import type { MenuItemsType, OrderItemType } from '../types'

export default function UseOrder() {
  
  const [order, setOrder] = useState<OrderItemType[]>([])

  const addItem = (item: MenuItemsType) => {
    console.log(item)
  }

  return {
    addItem
  }
}