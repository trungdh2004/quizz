"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaMapMarkedAlt } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  label: string;
  icon?: React.ReactNode;
  href: string;
}

const SidebarItem = ({ label, icon: Icon, href }: SidebarItemProps) => {
  const pathName = usePathname();

  const isActive = pathName === href;

  return (
    <Button
      variant={"sidebar"}
      className={cn("justify-start h-[42px] flex", isActive && "bg-slate-100")}
      asChild
    >
      <Link href={href}>
        {Icon} {label}
      </Link>
    </Button>
  );
};

export default SidebarItem;
