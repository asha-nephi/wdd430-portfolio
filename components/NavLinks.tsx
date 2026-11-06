import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function NavLinks() {
  return (
    <ul className="flex items-center gap-1 text-sm font-medium">
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className="rounded-full px-3 py-1.5 text-muted transition-colors hover:bg-accent-soft hover:text-accent"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
