import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

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
