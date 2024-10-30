"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsBugFill } from "react-icons/bs";

const Navbar = React.memo(() => {
  const current_path = usePathname();

  const nav_links = [
    { label: "Dashboard", link: "/" },
    { label: "Issues", link: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 h-14 items-center border-b mb-5 px-5">
      <Link href={"/"}>
        <BsBugFill />
      </Link>
      <ul className="flex space-x-6">
        {nav_links.map((nlink) => (
          <Link
            key={nlink.link}
            className={classNames({
              "text-zinc-900": current_path === nlink.link,
              "text-zinc-500": current_path !== nlink.link,
              "hover:text-zinc-900 cursor-pointer transition-colors": true,
            })}
            href={nlink.link}
          >
            {nlink.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
});

export default Navbar;
