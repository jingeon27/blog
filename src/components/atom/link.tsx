import clsx from "clsx";
import Link from "next/link";

type blogPathType = "/";
export const CustomLink = (
  props: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
    href:
      | blogPathType
      | { pathname: blogPathType; query: { [key: string]: string } };
  }
) => (
  <>
    <Link {...props} className={clsx("no-underline", props.className)} />
  </>
);
