import { ReactNode } from "react";
import Link from "next/link";

export default function Button({
  children,
  primary = false,
  dark = false,
  href,
  big,
  margin = 10
}: {
  children: ReactNode;
  primary?: boolean;
  dark?: boolean;
  href: string;
  big?: boolean;
  margin?: number;
}) {
  return (
    <>
      <Link legacyBehavior href={href} passHref>
        <a
          className={`button text-gray focus:ring ${primary ? "primary" : ""} ${
            dark ? "dark" : ""
          } ${big ? "big" : ""}`}
        >
          {children}
        </a>
      </Link>
      <style jsx>{`
        .button {
          text-decoration: none;
          padding: 8px 20px;
          margin: ${margin}px;
          margin-left: 0;
          border-radius: 0.25rem;
          border: 1px solid rgb(226, 232, 240);
          transition: background-color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        .button > :global(p) {
          display: inline;
        }

        .button > :global(svg) {
          display: inline;
          margin-right: 10px;
          transform: translateY(-2px) scale(1.3);
        }

        .button.big {
          padding: 12px 25px;
          margin-left: 10px;
        }

        :global(.dark) .button {
          border: 1px solid rgb(45, 55, 72);
        }

        .button:hover {
          background-color: rgba(0, 0, 0, 0.02);
        }

        :global(.dark) .button:hover {
          background-color: rgba(255, 255, 255, 0.02);
        }

        .button.primary {
          background-color: var(--primary);
          color: white;
          border: none;
        }

        .button.primary:hover {
          background-color: var(--primary-alt);
        }

        .button.dark {
          background-color: black;
          color: white;
          border: none;
        }

        .button.dark:hover {
          background-color: #2e4ea7;
        }
      `}</style>
    </>
  );
}
