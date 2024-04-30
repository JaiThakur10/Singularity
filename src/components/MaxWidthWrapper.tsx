import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const MaxWidthWarpper = ({
    className,
    children
}: {
    className?: string
    children: ReactNode
}) =>{
 return(
    <div className={cn("mx-auto h-full w-full max-w-screen-xl px-2.5 md:px-20",className)}>
    {children}
    </div>
 )
}

export default MaxWidthWarpper;