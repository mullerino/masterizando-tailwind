import { Button } from "@/components/Button"
import { formatBytes } from "@/utils/format-bytes"
import { CheckCircle2, Trash2, UploadCloud } from "lucide-react"
import { tv, VariantProps } from "tailwind-variants"

const fileItem = tv({
  slots: {
    container:
      "group flex items-start gap-4 rounded-lg border border-zinc-200 p-4",
  },

  base: "",
  variants: {
    state: {
      progress: {
        container: "",
      },
      complete: {
        container: "border-violet-500",
      },
      error: {
        container: "bg-error-25 border-error-300",
      },
    },
  },
  defaultVariants: {
    state: "progress",
  },
})

interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { container } = fileItem({ state })
  return (
    <div key={name} className={container()}>
      <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === "error" ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-red-700">
              Upload failed, please try again.
            </span>
            <span className="text-sm text-red-600">{name}</span>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-red-700 hover:text-red-900"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 w-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2 rounded-full bg-violet-600"
                style={{ width: state === "complete" ? "100%" : "80%" }}
              ></div>
            </div>
            <span className="text-sm font-medium text-zinc-700">
              {state === "complete" ? "100%" : "80%"}
            </span>
          </div>
        </div>
      )}

      {state === "complete" ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button variant="ghost">
          <Trash2 className="h-5 w-5 text-zinc-500" />
        </Button>
      )}
    </div>
  )
}
