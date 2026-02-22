"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { COMPANY_NAME, PHONE_NUMBER } from "@/lib/constants";

export default function FloatingWhatsAppButton() {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const t = useTranslations("WhatsApp");

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<FloatingWhatsApp
			phoneNumber={PHONE_NUMBER}
			accountName={COMPANY_NAME}
			avatar="/apple-touch-icon.png"
			chatMessage={t("chatMessage")}
			placeholder={t("placeholder")}
			statusMessage={t("statusMessage")}
			notificationSound
			allowEsc
			darkMode={resolvedTheme === "dark"}
		/>
	);
}
