import * as Tabs from "@radix-ui/react-tabs"
import { motion } from "framer-motion"

interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
  changeSelected?: () => void
}

export function TabItem({
  value,
  title,
  isSelected = false,
  changeSelected,
}: TabItemProps) {
  return (
    <Tabs.Trigger
      onClick={() => changeSelected}
      value={value}
      className={`${isSelected ? "text-violet-700" : "text-zinc-500"} group relative px-1 pb-4 text-sm font-medium hover:text-violet-700`}
    >
      <span className="rounded whitespace-nowrap outline-none group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {title}
      </span>
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  )
}
