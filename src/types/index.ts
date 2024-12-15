export type MenuItemsType = {
  id: number,
  name: string,
  price: number
}

export type OrderItemType = MenuItemsType & {
  quantity: number
}