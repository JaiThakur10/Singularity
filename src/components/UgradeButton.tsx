import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const UgradeButton = () => {
return(
    <Link href="https://buy.stripe.com/test_00gg0paQK1AL2Eo3cd" className=" w-full" >
        <Button className=" w-full">
        Upgrade Now <ArrowRight className=" h-5 w-5 ml-1.5"/>
        </Button>
    </Link>
)
}

export default UgradeButton;


