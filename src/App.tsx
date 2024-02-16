import { MenuStep } from './components/menu'

export function App() {
  return (
    <main className="font-poppins relative mx-4 max-w-[800px] flex-1 grid-cols-[153px_1fr] gap-x-[0.875rem] rounded-xl bg-white px-5 py-6 shadow-[0_2px_8px#00000040] md:grid">
      <aside className="bg-accent absolute -top-[5.625rem] left-0 w-full rounded-md px-4 py-5 md:static">
        <MenuStep />
      </aside>
      <section>
        <h1 className="text-default mb-3 text-[1.375rem] font-medium leading-7 sm:text-[2rem] md:mb-6">
          Bem vindo a Dev Community <span className="hidden sm:inline">🧑‍💻</span>
        </h1>
        <p className="after:bg-accent text-base text-gray-700 after:mt-2 after:block after:h-1 after:w-28 sm:text-xl">
          Para fazer parte desta incrível comunidade, primeiro você terá que nos fornecer
          algumas informações suas para que possamos nos conhecer melhor. 😁
        </p>
      </section>
    </main>
  )
}
