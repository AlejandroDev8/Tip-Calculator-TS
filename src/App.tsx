import { MenuItems } from "./components/MenuItems"
import { OrderContents } from "./components/OrderContents"
import { menuItems } from "./data/database"
import UseOrder from "./hooks/UseOrder"

export const App = () => {

  const {order , addItem, removeItem} = UseOrder()

  return (
    <>
    <header className="bg-sky-400 py-5">
      <h1 className="text-center text-4xl font-black text-white">
        Calculadora de Propinas y consumo
      </h1>
    </header>

    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-4">
      <div className="p-5">
        <h2 className="text-4xl font-black">Menú</h2>
        <section className="space-y-2 mt-10">
          {menuItems.map(item => (
            <MenuItems key={item.id} item={item} addItem={addItem}/>
          ))}
        </section>
      </div>
      <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
        <OrderContents order={order} removeItem={removeItem}/>
      </div>
    </main>
    </>
  )
}
