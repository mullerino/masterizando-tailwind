import { SettingsTab } from "@/components/SettingsTab"
import * as Input from "../components/Input"
import * as FileInput from "../components/Form/FileInput"
import {
  Bold,
  ChevronDown,
  Italic,
  Link,
  ListOrdered,
  Mail,
} from "lucide-react"
import { Select } from "@/components/Form/Select"
import { SelectItem } from "@/components/Form/Select/SelectIem"
import { Button } from "@/components/Button"

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTab />

      <div className="flex flex-col mt-6">
        <div className="flex flex-col gap-4 lg:items-center lg:flex-row items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">Cancel</Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 space-y-1"
        >
          <div className="flex flex-col lg:grid lg:grid-cols-[minmax(7.5rem,_20rem)_minmax(25rem,_1fr)_minmax(0,_15rem)] gap-3 pb-6">
            <label
              htmlFor="firstName"
              className="text-sm text-zinc-700 font-medium"
            >
              Name
            </label>
            <div className="flex flex-col lg:grid gap-6 lg:grid-cols-2">
              <Input.InputRoot>
                <Input.InputControl id="firstName" defaultValue={"Leandro"} />
              </Input.InputRoot>
              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm text-zinc-700 font-medium lg:sr-only"
                >
                  Last name
                </label>

                <Input.InputRoot>
                  <Input.InputControl id="lastName" defaultValue={"Muller"} />
                </Input.InputRoot>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-[minmax(7.5rem,_20rem)_minmax(25rem,_1fr)_minmax(0,_15rem)] gap-3 pb-6">
            <label
              htmlFor="email"
              className="text-sm text-zinc-700 font-medium"
            >
              Email
            </label>
            <Input.InputRoot>
              <Input.InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.InputPrefix>
              <Input.InputControl
                id="email"
                type="email"
                defaultValue={"leandromllr9@gmail.com"}
              />
            </Input.InputRoot>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-[minmax(7.5rem,_20rem)_minmax(25rem,_1fr)_minmax(0,_15rem)] gap-3 pb-6">
            <label
              htmlFor="photo"
              className="text-sm text-zinc-700 font-medium "
            >
              Your photo
              <span className="block text-sm font-normal text-zinc-500 mt-0.5">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex flex-col lg:flex-row lg:items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-[minmax(7.5rem,_20rem)_minmax(25rem,_1fr)_minmax(0,_15rem)] gap-3 pb-6">
            <label htmlFor="role" className="text-sm text-zinc-700 font-medium">
              Role
            </label>
            <Input.InputRoot>
              <Input.InputControl
                id="role"
                type="text"
                defaultValue={"leandromllr9@gmail.com"}
              />
            </Input.InputRoot>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-[minmax(7.5rem,_20rem)_minmax(25rem,_1fr)_minmax(0,_15rem)] gap-3 pb-6">
            <label
              htmlFor="country"
              className="text-sm text-zinc-700 font-medium"
            >
              Country
            </label>
            <Select placeholder="Select a coutry...">
              <SelectItem value="br" text="Brasil" />
            </Select>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-[minmax(7.5rem,_20rem)_minmax(25rem,_1fr)_minmax(0,_15rem)] gap-3 pb-6">
            <label
              htmlFor="timezone"
              className="text-sm text-zinc-700 font-medium"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem
                value="pacific"
                text="Pacific Standard Time (UTC-08:00)"
              />
            </Select>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-[minmax(7.5rem,_20rem)_minmax(25rem,_1fr)_minmax(0,_15rem)] gap-3 pb-6">
            <label htmlFor="bio" className="text-sm text-zinc-700 font-medium ">
              Bio
              <span className="block text-sm font-normal text-zinc-500 mt-0.5">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal text" />
                </Select>
                <div className="flex items-center gap-1">
                  <Button variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <textarea
                id="bio"
                className="min-h-[120px] max-h-[360px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                defaultValue="I'm a software develop!"
              ></textarea>
            </div>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-[minmax(7.5rem,_20rem)_minmax(25rem,_1fr)_minmax(0,_15rem)] gap-3 pb-6">
            <label
              htmlFor="projects"
              className="text-sm text-zinc-700 font-medium "
            >
              Portifolio projects
              <span className="block text-sm font-normal text-zinc-500 mt-0.5">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline">Cancel</Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
