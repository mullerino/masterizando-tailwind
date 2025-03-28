import * as SelectPrimitave from "@radix-ui/react-select"
import { Check, ChevronDown } from "lucide-react"
import { ReactNode } from "react"

interface SelectProps extends SelectPrimitave.SelectProps {
  children: ReactNode
  placeholder: string
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectPrimitave.Root {...props}>
      <SelectPrimitave.Trigger className="flex h-11 w-full outline-none items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 focus:border-violet-300 focus:ring-4 focus:ring-violet-100">
        <SelectPrimitave.Value
          className="text-black"
          placeholder={placeholder}
        />
        <SelectPrimitave.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitave.Icon>
      </SelectPrimitave.Trigger>

      <SelectPrimitave.Portal>
        <SelectPrimitave.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 rounded-lg border border-zinc-300 bg-white w-[--radix-select-trigger-width] overflow-hidden"
        >
          <SelectPrimitave.Viewport className="w-full">
            {children}
          </SelectPrimitave.Viewport>
        </SelectPrimitave.Content>
      </SelectPrimitave.Portal>
    </SelectPrimitave.Root>
  )
}
