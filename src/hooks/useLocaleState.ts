"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import type { Locale } from "@/i18n/config";

export function useLocaleState() {
	const router = useRouter();

	const changeLocale = useCallback(
		(locale: Locale) => {
			document.cookie = `locale=${locale};path=/;max-age=31536000`;
			router.refresh();
		},
		[router],
	);

	return { changeLocale };
}
