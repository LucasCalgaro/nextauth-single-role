"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";
import { useCurrentUser } from "@/hooks/use-current-user";

export const Navbar = () => {
  const pathname = usePathname();
  const user = useCurrentUser();

  const user_options = [
    {
      label: "Admin",
      href: "/admin",
    },
    {
      label: "User",
      href: "/user",
    },
    {
      label: "Settings",
      href: "/user/settings",
    },
  ];

  const admin_options = [
    {
      label: "Admin",
      href: "/admin",
    },
    {
      label: "User",
      href: "/user",
    },
    {
      label: "Settings",
      href: "/admin/settings",
    },
  ];

  return (
    <nav className="flex justify-between items-center p-4 w-full bg-primary-foreground">
      <div className="flex gap-x-2">
        {user &&
          user.role === "ADMIN" &&
          admin_options.map((option) => (
            <Button
              key={option.href}
              asChild
              variant={pathname === option.href ? "default" : "outline"}
            >
              <Link href={option.href}>{option.label}</Link>
            </Button>
          ))}

        {user &&
          user.role === "USER" &&
          user_options.map((option) => (
            <Button
              key={option.href}
              asChild
              variant={pathname === option.href ? "default" : "outline"}
            >
              <Link href={option.href}>{option.label}</Link>
            </Button>
          ))}
      </div>
      <UserButton />
    </nav>
  );
};
