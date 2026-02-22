"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 z-50 w-full transition-all duration-300 ${
				scrolled
					? "bg-background/95 backdrop-blur-md shadow-md"
					: "bg-background/80 backdrop-blur-sm"
			}`}
		>
			<div className="container mx-auto flex h-18 items-center justify-between px-6">
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
				<nav className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={`relative text-sm font-medium tracking-wide transition-colors hover:text-hrz-red ${
								pathname === link.href ? "text-hrz-red" : "text-hrz-blue"
							} after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-hrz-red after:transition-all after:duration-300 ${
								pathname === link.href
									? "after:w-full"
									: "after:w-0 hover:after:w-full"
							}`}
						>
							{link.label}
						</Link>
					))}
					<Button
						asChild
						className="bg-hrz-red hover:bg-hrz-red/90 text-background rounded-lg px-6 font-medium shadow-sm"
					>
						<Link href="/contact">Get a Quote</Link>
					</Button>
				</nav>

				{/* Mobile nav */}
				<Sheet open={open} onOpenChange={setOpen}>
					<SheetTrigger asChild className="md:hidden">
						<Button variant="ghost" size="icon" className="text-hrz-blue">
							<Menu className="h-6 w-6" />
						</Button>
					</SheetTrigger>
					<SheetContent side="right" className="w-72 bg-background">
						<SheetTitle className="sr-only">Navigation</SheetTitle>
						<nav className="flex flex-col gap-2 mt-10">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									onClick={() => setOpen(false)}
									className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
										pathname === link.href
											? "text-hrz-red bg-hrz-red/5"
											: "text-hrz-blue hover:bg-secondary"
									}`}
								>
									{link.label}
								</Link>
							))}
							<Button
								asChild
								className="bg-hrz-red hover:bg-hrz-red/90 text-background mt-4 rounded-lg"
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
