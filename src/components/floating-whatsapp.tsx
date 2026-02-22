"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { COMPANY_NAME, PHONE_NUMBER } from "@/lib/constants";

export default function FloatingWhatsAppButton() {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<FloatingWhatsApp
			phoneNumber={PHONE_NUMBER}
			accountName={COMPANY_NAME}
			avatar="/apple-touch-icon.png"
			chatMessage={"Hola! 👋\n¿En qué podemos ayudarte?"}
			placeholder="Escribe un mensaje..."
			statusMessage="Normalmente responde en 1 hora"
			notificationSound
			allowEsc
			darkMode={resolvedTheme === "dark"}
		/>
	);
}
