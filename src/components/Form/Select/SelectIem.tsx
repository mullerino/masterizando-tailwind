import * as Select from "@radix-ui/react-select"
import { Check } from "lucide-react"

type SelectItemProps = Select.SelectItemProps & {
  text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <Select.Item
      {...props}
      className="flex w-full items-center justify-between outline-none gap-2 px-3 py-2.5"
    >
      <Select.ItemText className="text-black">{text}</Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
