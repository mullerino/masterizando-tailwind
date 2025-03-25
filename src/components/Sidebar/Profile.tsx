import { LogOut } from "lucide-react"

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/mullerino.png"
        alt="Perfil"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Leandro Müller
        </span>
        <span className="text-sm text-zinc-500 truncate">leandromllr9@gmail.com</span>
      </div>
      <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
