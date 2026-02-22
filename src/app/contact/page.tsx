"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
	{
		icon: MapPin,
		title: "Our Location",
		content:
			"Av. industrial libramiento 111, Parque Industrial libramiento, General Escobedo, Nuevo Leon, Mexico.",
		href: undefined,
	},
	{
		icon: Mail,
		title: "Email Us",
		content: "info@hrzlogistics.mx",
		href: "mailto:info@hrzlogistics.mx?subject=Services Information&body=I saw your web page.",
	},
	{
		icon: Phone,
		title: "Call Us",
		content: "+52 81 1285 3039",
		href: "tel:+528112853039",
	},
];

export default function ContactPage() {
	const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
		"idle",
	);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus("sending");
		// TODO: connect to API route for email sending
		setTimeout(() => setStatus("sent"), 1000);
	}

	return (
		<>
			{/* Page Header */}
			<section className="relative bg-hrz-blue py-24 lg:py-32 overflow-hidden">
				<div className="absolute top-0 right-0 w-96 h-96 bg-hrz-red/5 rounded-full translate-x-1/2 -translate-y-1/2" />
				<div className="absolute bottom-0 left-0 w-72 h-72 bg-hrz-red/5 rounded-full -translate-x-1/3 translate-y-1/3" />
				<div className="container mx-auto px-6 relative">
					<div className="max-w-2xl mx-auto text-center">
						<span className="text-hrz-red text-sm font-semibold uppercase tracking-wider">
							Get In Touch
						</span>
						<h1 className="text-4xl md:text-5xl font-bold text-white mt-3 leading-tight text-balance">
							Contact Us
						</h1>
						<p className="text-white/60 mt-5 text-lg leading-relaxed">
							Located in Monterrey, Mexico with easy access to all ports in the
							country for your global warehousing needs.
						</p>
					</div>
				</div>
			</section>

			{/* Breadcrumb */}
			<nav className="bg-hrz-light dark:bg-hrz-dark py-3 border-b border-border/50">
				<div className="container mx-auto px-6">
					<ol className="flex items-center gap-2 text-sm text-muted-foreground">
						<li>
							<Link href="/" className="hover:text-hrz-red transition-colors">
								Home
							</Link>
						</li>
						<li className="text-muted-foreground/40">/</li>
						<li className="text-hrz-blue dark:text-white font-medium">
							Contact
						</li>
					</ol>
				</div>
			</nav>

			<section className="py-20 lg:py-28 bg-background">
				<div className="container mx-auto px-6">
					{/* Map */}
					<div className="mb-16 rounded-2xl overflow-hidden shadow-lg border border-border/50">
						<iframe
							className="w-full h-[380px] border-0"
							src="https://maps.google.com/maps?q=av%20industrial%20libramiento%20111&t=&z=13&ie=UTF8&iwloc=&output=embed"
							allowFullScreen
							loading="lazy"
							title="HRZ Logistics location"
						/>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
						{/* Contact Info */}
						<div className="space-y-6">
							<div>
								<h2 className="text-2xl font-bold text-hrz-blue dark:text-white mb-2">
									Reach Out to Us
								</h2>
								<p className="text-muted-foreground text-sm leading-relaxed">
									Our team is ready to assist you with all your logistics and
									warehousing needs.
								</p>
							</div>

							{contactInfo.map((item) => (
								<div
									key={item.title}
									className="flex gap-4 p-5 rounded-xl border border-border/50 hover:border-hrz-red/20 hover:shadow-sm transition-all"
								>
									<div className="flex-shrink-0 w-11 h-11 bg-hrz-red/10 rounded-xl flex items-center justify-center">
										<item.icon className="h-5 w-5 text-hrz-red" />
									</div>
									<div>
										<h4 className="font-semibold text-hrz-blue dark:text-white text-sm">
											{item.title}
										</h4>
										{item.href ? (
											<a
												href={item.href}
												className="text-sm text-muted-foreground hover:text-hrz-red transition-colors mt-0.5 block"
											>
												{item.content}
											</a>
										) : (
											<p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
												{item.content}
											</p>
										)}
									</div>
								</div>
							))}
						</div>

						{/* Contact Form */}
						<div className="lg:col-span-2">
							<div className="p-8 rounded-2xl border border-border/50 bg-hrz-light/50 dark:bg-hrz-dark/50">
								<h2 className="text-2xl font-bold text-hrz-blue dark:text-white mb-2">
									Send Us a Message
								</h2>
								<p className="text-sm text-muted-foreground mb-6">
									Fill out the form below and we will get back to you as soon as
									possible.
								</p>

								<form onSubmit={handleSubmit} className="space-y-5">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
										<Input
											name="name"
											placeholder="Your Name"
											required
											className="h-12 rounded-lg bg-background border-border/50 focus:border-hrz-red"
										/>
										<Input
											name="email"
											type="email"
											placeholder="Your Email"
											required
											className="h-12 rounded-lg bg-background border-border/50 focus:border-hrz-red"
										/>
									</div>
									<Input
										name="subject"
										placeholder="Subject"
										required
										className="h-12 rounded-lg bg-background border-border/50 focus:border-hrz-red"
									/>
									<Textarea
										name="message"
										placeholder="Your message..."
										rows={5}
										required
										className="rounded-lg bg-background border-border/50 focus:border-hrz-red resize-none"
									/>

									{status === "sent" && (
										<div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-sm px-4 py-3 rounded-lg">
											Your message has been sent. Thank you!
										</div>
									)}
									{status === "error" && (
										<div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm px-4 py-3 rounded-lg">
											Something went wrong. Please try again.
										</div>
									)}

									<Button
										type="submit"
										disabled={status === "sending"}
										className="bg-hrz-red hover:bg-hrz-red/90 text-white rounded-lg px-8 h-12 text-base font-medium shadow-lg shadow-hrz-red/20"
									>
										{status === "sending" ? (
											"Sending..."
										) : (
											<>
												Send Message
												<Send className="ml-2 h-4 w-4" />
											</>
										)}
									</Button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
