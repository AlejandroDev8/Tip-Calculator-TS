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
      <div className="p-5">
        <h2 className="text-4xl font-black">Menú</h2>
        <section className="space-y-2 mt-10">
          {menuItems.map(item => (
            <MenuItems key={item.id} item={item}/>
          ))}
        </section>
      </div>
      <div>
        <h2>Consumo</h2>
      </div>
    </main>
    </>
  )
}
