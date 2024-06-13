import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Image src="/navicon.png" alt="navicon" width={50} height={50}/></Button>
      </SheetTrigger>
      <SheetContent>
      <SheetTitle><Image src="/Logo.png" alt="Logo" width={50} height={50} className="w-full"></Image></SheetTitle>
        
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            
           
            
            
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            
             
         
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
           <Link href="/"> <Button type="submit" className="flex justify-center items-center ">Home</Button></Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
