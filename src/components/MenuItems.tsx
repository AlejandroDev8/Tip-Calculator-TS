import type {MenuItemsType} from '../types'

type MenuItemsProps = {
  item: MenuItemsType
}

export const MenuItems = ({item} : MenuItemsProps) => {
  return (
    <button className='border-2 border-sky-400 w-full p-3 flex justify-between hover:bg-sky-200'>
      <p>{item.name}</p>
      <p className='font-black'>${item.price}</p>
    </button>
  )
}
