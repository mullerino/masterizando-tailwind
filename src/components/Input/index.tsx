import { ComponentProps } from "react"

type InputPrefixProps = ComponentProps<"div">
type InputControlProps = ComponentProps<"input">
type InputRootProps = ComponentProps<"div">

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

export function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  )
}

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 mx-1 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
