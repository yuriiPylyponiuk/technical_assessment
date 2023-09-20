"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";

export const Navigation = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="navigation">
      <Link className={`${pathname === "/" ? "underline" : ""} `} href={"/"}>
        Task 1
      </Link>
      <Link
        className={`${
          pathname === "/secondTask" ||
          pathname === "/teacher" ||
          pathname === "/student"
            ? "underline"
            : ""
        } `}
        href={"/secondTask"}
      >
        Task 2
      </Link>
    </div>
  );
};
