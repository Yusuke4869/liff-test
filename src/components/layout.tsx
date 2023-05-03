import { Roboto } from "next/font/google";
import type { FC, ReactNode } from "react";

const roboto = Roboto({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => <main className={roboto.className}>{children}</main>;

export default Layout;
