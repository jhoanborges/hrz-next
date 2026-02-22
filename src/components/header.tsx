"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/services", label: "Services" },
	{ href: "/contact", label: "Contact" },
];

export default function Header() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur shadow-sm">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<Link href="/" className="flex items-center">
					<Image
						src="/img/logo-trans.png"
						alt="HRZ Logistics"
						width={160}
						height={40}
						className="h-10 w-auto"
						priority
					/>
				</Link>

				{/* Desktop nav */}
				<nav className="hidden md:flex items-center gap-6">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={`text-sm font-medium transition-colors hover:text-hrz-red ${
								pathname === link.href ? "text-hrz-red" : "text-hrz-blue"
							}`}
						>
							{link.label}
						</Link>
					))}
					<Button asChild className="bg-hrz-red hover:bg-hrz-red/90 text-white">
						<Link href="/contact">Get a Quote</Link>
					</Button>
				</nav>

				{/* Mobile nav */}
				<Sheet open={open} onOpenChange={setOpen}>
					<SheetTrigger asChild className="md:hidden">
						<Button variant="ghost" size="icon">
							<Menu className="h-6 w-6" />
						</Button>
					</SheetTrigger>
					<SheetContent side="right" className="w-64">
						<SheetTitle className="sr-only">Navigation</SheetTitle>
						<nav className="flex flex-col gap-4 mt-8">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									onClick={() => setOpen(false)}
									className={`text-lg font-medium ${
										pathname === link.href ? "text-hrz-red" : "text-hrz-blue"
									}`}
								>
									{link.label}
								</Link>
							))}
							<Button
								asChild
								className="bg-hrz-red hover:bg-hrz-red/90 text-white mt-4"
							>
								<Link href="/contact" onClick={() => setOpen(false)}>
									Get a Quote
								</Link>
							</Button>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
