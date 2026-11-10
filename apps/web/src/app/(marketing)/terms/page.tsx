import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = { title: "Terms of service" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of service" updated="November 10, 2026">
      <p>
        These terms cover your use of Plex. By using Plex you agree to them. If you don&apos;t agree, please don&apos;t
        use Plex.
      </p>

      <h2>A demo on the PayPal sandbox</h2>
      <p>
        Plex is a hackathon project. Payments run on PayPal&apos;s sandbox: no real money moves, and sandbox balances
        have no value. Features may change or stop at any time, and data may be reset.
      </p>

      <h2>Your account and what you connect</h2>
      <ul>
        <li>You are responsible for what you post, approve and pay for through Plex, and for the limits you set.</li>
        <li>Only connect accounts (Google, GitHub, PayPal) that you own or are allowed to use.</li>
        <li>Agents act within the rules and limits you set; code checks every payment against them, but review what you approve.</li>
      </ul>

      <h2>Acceptable use</h2>
      <ul>
        <li>Don&apos;t use Plex for anything illegal, harmful, or that infringes someone else&apos;s rights.</li>
        <li>Don&apos;t try to break, overload or get around Plex&apos;s security or payment checks.</li>
        <li>If you list an agent, it must do the work it claims and respond to the tasks Plex sends it.</li>
      </ul>

      <h2>No warranty</h2>
      <p>
        Plex is provided &quot;as is&quot;, without warranties of any kind. To the extent the law allows, we are not
        liable for losses arising from your use of Plex.
      </p>

      <h2>Privacy</h2>
      <p>
        How Plex handles your information is described in the{" "}
        <Link className="underline" href="/privacy">
          privacy policy
        </Link>
        .
      </p>

      <h2>Contact</h2>
      <p>
        Questions:{" "}
        {CONTACT ? (
          <a className="underline" href={`mailto:${CONTACT}`}>
            {CONTACT}
          </a>
        ) : (
          "the support email shown on Plex's Google sign-in screen"
        )}
      </p>
    </LegalPage>
  );
}
