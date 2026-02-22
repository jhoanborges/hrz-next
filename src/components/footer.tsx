"use client";

import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const socialLinks = [
	{ icon: Twitter, href: "#", label: "Twitter" },
	{ icon: Facebook, href: "#", label: "Facebook" },
	{ icon: Instagram, href: "#", label: "Instagram" },
	{ icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
	const t = useTranslations("Footer");

	return (
		<footer className="bg-hrz-dark">
			{/* Main footer */}
			<div className="container mx-auto px-6 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
					{/* Logo & description */}
					<div className="lg:col-span-1">
						<Link href="/" className="inline-block mb-5">
							<Image
								src="/img/logo-trans.png"
								alt="HRZ Logistics"
								width={160}
								height={40}
								className="h-10 w-auto brightness-0 invert"
							/>
						</Link>
						<p className="text-white/50 text-sm leading-relaxed">
							{t("description")}
						</p>
						<div className="flex gap-3 mt-6">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									aria-label={social.label}
									className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-hrz-red hover:text-white transition-all duration-300"
								>
									<social.icon className="h-4 w-4" />
								</a>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
							{t("quickLinks")}
						</h4>
						<ul className="space-y-3">
							{[
								{ href: "/", key: "home" as const },
								{ href: "/services", key: "services" as const },
								{ href: "/contact", key: "contact" as const },
							].map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm text-white/50 hover:text-hrz-red transition-colors"
									>
										{t(link.key)}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Our Services */}
					<div>
						<h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
							{t("ourServices")}
						</h4>
						<ul className="space-y-3">
							{(
								[
									"warehousing",
									"distribution",
									"logistics",
									"trucking",
									"packaging",
								] as const
							).map((key) => (
								<li key={key}>
									<Link
										href="/services"
										className="text-sm text-white/50 hover:text-hrz-red transition-colors"
									>
										{t(key)}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
							{t("contactUs")}
						</h4>
						<div className="space-y-4">
							<div className="flex gap-3">
								<MapPin className="h-4 w-4 text-hrz-red flex-shrink-0 mt-1" />
								<p className="text-sm text-white/50 leading-relaxed">
									Av. industrial libramiento 111, Parque Industrial libramiento,
									General Escobedo, Nuevo Leon, Mexico
								</p>
							</div>
							<div className="flex gap-3 items-center">
								<Phone className="h-4 w-4 text-hrz-red flex-shrink-0" />
								<a
									href="tel:+528112853039"
									className="text-sm text-white/50 hover:text-hrz-red transition-colors"
								>
									+52 81 1285 3039
								</a>
							</div>
							<div className="flex gap-3 items-center">
								<Mail className="h-4 w-4 text-hrz-red flex-shrink-0" />
								<a
									href="mailto:info@hrzlogistics.mx?subject=Services Information&body=I saw your web page."
									className="text-sm text-white/50 hover:text-hrz-red transition-colors"
								>
									info@hrzlogistics.mx
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="border-t border-white/10">
				<div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
					<p className="text-xs text-white/40">
						{t("copyright", { year: new Date().getFullYear() })}
					</p>
					<div className="flex gap-6">
						<Link
							href="#"
							className="text-xs text-white/40 hover:text-white/70 transition-colors"
						>
							{t("privacyPolicy")}
						</Link>
						<Link
							href="#"
							className="text-xs text-white/40 hover:text-white/70 transition-colors"
						>
							{t("termsOfService")}
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
