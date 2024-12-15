import type {MenuItemsType} from '../types'

type MenuItemsProps = {
  item: MenuItemsType
  addItem: () => void
}

export const MenuItems = ({item, addItem} : MenuItemsProps) => {
  return (
    <button 
      className='border-2 border-sky-400 w-full p-3 flex justify-between hover:bg-sky-200'
      onClick={() => {addItem()}}>
      <p>{item.name}</p>
      <p className='font-black'>${item.price}</p>
    </button>
  )
}
