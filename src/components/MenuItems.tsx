import type {MenuItemsType} from '../types'

type MenuItemsProps = {
  item: MenuItemsType
}

export const MenuItems = ({item} : MenuItemsProps) => {
  return (
    <>
      <p>{item.name}</p>
      <p className='font-black'>${item.price}</p>
    </>
  )
}
