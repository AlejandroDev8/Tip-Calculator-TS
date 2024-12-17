import {useState} from 'react'
import type { MenuItemsType, OrderItemType } from '../types'

export default function UseOrder() {
  
  const [order, setOrder] = useState<OrderItemType[]>([])
  const MAX_QUANTITY = 10
  const MIN_QUANTITY = 1

  const [tip, setTip] = useState(0)

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

  const increaseQuantity = (id: MenuItemsType['id']) => {
    const updatedOrder = order.map(orderItem => {
      if(orderItem.id === id) {
        if(orderItem.quantity < MAX_QUANTITY) {
          return {...orderItem, quantity: orderItem.quantity + 1}
        }
      }
      return orderItem
    })
    setOrder(updatedOrder)
  }

  const decreaseQuantity = (id: MenuItemsType['id']) => {
    const updatedOrder = order.map(orderItem => {
      if(orderItem.id === id) {
        if(orderItem.quantity > MIN_QUANTITY) {
          return {...orderItem, quantity: orderItem.quantity - 1}
        }
      }
      return orderItem
    })
    setOrder(updatedOrder)
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity
  }
}