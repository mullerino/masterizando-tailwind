"use client"

import { UploadCloud } from "lucide-react"
import { ComponentProps } from "react"
import { useFileInput } from "./Root"

type TriggerProps = ComponentProps<"div">

export function Trigger(props: TriggerProps) {
  const { id } = useFileInput()
  return (
    <label
      className="group flex flex-1 flex-col items-center gap-3 rounded-lg cursor-pointer border border-zinc-300 px-6 py-4 text-zinc-500 text-center shadow-sm hover:border-violet-200 hover:bg-violet-50 hover:text-violet-500"
      htmlFor={id}
    >
      <div className="border-4 border-zinc-50 bg-zinc-100 p-2 rounded-full group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-700 mr-1">
            Click to upload
          </span>
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG, or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}
