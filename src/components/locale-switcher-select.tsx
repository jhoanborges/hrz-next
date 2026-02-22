"use client";

import { Languages } from "lucide-react";
import { useTransition } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
} from "@/components/ui/select";
import { useLocaleState } from "@/hooks/useLocaleState";
import type { Locale } from "@/i18n/config";

type Props = {
	defaultValue: string;
	items: Array<{ value: string; label: string }>;
	label: string;
};

export default function LocaleSwitcherSelect({
	defaultValue,
	items,
	label,
}: Props) {
	const [isPending, startTransition] = useTransition();
	const { changeLocale } = useLocaleState();

	function onChange(value: string) {
		const locale = value as Locale;
		startTransition(() => {
			changeLocale(locale);
		});
	}

	return (
		<Select defaultValue={defaultValue} onValueChange={onChange}>
			<SelectTrigger
				aria-label={label}
				className={`border-none shadow-none bg-transparent h-9 w-9 p-2 [&>svg:last-child]:hidden ${
					isPending ? "pointer-events-none opacity-60" : ""
				}`}
			>
				<Languages className="h-5 w-5 text-foreground" />
			</SelectTrigger>
			<SelectContent align="end" position="popper">
				{items.map((item) => (
					<SelectItem key={item.value} value={item.value}>
						{item.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
