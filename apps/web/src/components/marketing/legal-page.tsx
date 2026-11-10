import Link from "next/link";
import { Wordmark } from "@/components/shell/wordmark";

/** Contact for policy questions. Set NEXT_PUBLIC_CONTACT_EMAIL in the deployment, not in code. */
export const CONTACT = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

/** Shared frame for the privacy policy and terms pages. */
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <Link href="/" aria-label="Plex home" className="inline-block">
        <Wordmark />
      </Link>
      <h1 className="mt-10 font-display text-[36px] leading-tight font-extrabold tracking-[-0.03em] text-ink">{title}</h1>
      <p className="mt-2 text-[13px] text-faint">Last updated {updated}</p>
      <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-ink-2 [&_h2]:mt-10 [&_h2]:text-[18px] [&_h2]:font-semibold [&_h2]:text-ink [&_li]:mt-1.5 [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </div>
    </main>
  );
}
