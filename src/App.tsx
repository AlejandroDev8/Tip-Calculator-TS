import { MenuItems } from "./components/MenuItems"
import { menuItems } from "./data/database"

export const App = () => {

  return (
    <>
    <header className="bg-sky-400 py-5">
      <h1 className="text-center text-4xl font-black text-white">
        Calculadora de Propinas y consumo
      </h1>
    </header>

    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-4">
      <div>
        <h2>Menú</h2>
        {menuItems.map(item => (
          <MenuItems key={item.id} item={item}/>
        ))}
      </div>
      <div>
        <h2>Consumo</h2>
      </div>
    </main>
    </>
  )
}
