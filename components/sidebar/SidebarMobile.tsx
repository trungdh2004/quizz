import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import { useMediaQuery } from "usehooks-ts";

interface Props {
  children: React.ReactNode;
}

const SidebarMobile = ({ children }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side={"left"}>
        <Sidebar className="border-0" />
      </SheetContent>
    </Sheet>
  );
};

export default SidebarMobile;
