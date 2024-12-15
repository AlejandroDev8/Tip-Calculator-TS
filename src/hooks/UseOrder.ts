import {useState} from 'react'
import type { OrderItemType } from '../types'

export default function UseOrder() {
  
  const [order, setOrder] = useState<OrderItemType[]>([])

  const addItem = () => {
    console.log('add item')
  }

  return {
    addItem
  }
}