import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonBaseProps = {
  children: ReactNode;
  styleType?: "glass" | "solid";
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center rounded-full uppercase font-bold tracking-widest transition-all duration-300 px-8 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-70 disabled:cursor-not-allowed";

const styles = {
  glass:
    "border border-white text-white bg-white/15 backdrop-blur-md shadow-lg hover:bg-white hover:text-mega-blue hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]",
  solid:
    "border border-transparent bg-[#0f172a] text-white shadow-md hover:bg-[#0b1533] focus-visible:outline-[#0b1533]",
};

export function Button(props: ButtonProps) {
  const { children, className = "", styleType = "solid", ...rest } = props;
  const variantClasses = styles[styleType];
  const classes = `${baseClasses} ${variantClasses} ${className}`.trim();

  const isLink = (p: ButtonProps): p is ButtonAsLink => "href" in p && typeof p.href === "string";

  if (isLink({ children, className, styleType, ...rest })) {
    const { href, ...anchorProps } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
