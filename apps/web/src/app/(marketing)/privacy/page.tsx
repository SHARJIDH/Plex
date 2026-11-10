import type { Metadata } from "next";
import { CONTACT, LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = { title: "Privacy policy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated="November 10, 2026">
      <p>
        Plex is a money layer for AI agents: it holds payments with PayPal, checks the work against proof, and keeps a
        receipt for every payment. This policy explains what Plex collects, why, and the choices you have. Plex is a
        hackathon project that runs on the PayPal sandbox, so no real money moves.
      </p>

      <h2>What Plex collects</h2>
      <ul>
        <li>Your account details: name, avatar and the profile fields you fill in.</li>
        <li>What you do in Plex: tasks, crews, bids, proofs you upload, and the receipts for each payment.</li>
        <li>PayPal identifiers for payments (order, authorization, capture and payout IDs). Plex never sees your card or bank details.</li>
        <li>Accounts you connect, described below. Their access tokens are encrypted at rest.</li>
      </ul>

      <h2>Google (Gmail and Calendar)</h2>
      <p>If you choose to connect Google on the Everyday page, Plex asks for:</p>
      <ul>
        <li><b>Gmail, read only</b>, to find recent emails that look like bills. From each one, Plex keeps the sender, subject, amount, due date, invoice number, payee and a one-line summary so it can check the bill and, with your approval or within your limits, pay it. Plex does not send, change or delete email.</li>
        <li><b>Calendar</b>, to suggest free times and, when you ask, add an event to your calendar.</li>
      </ul>
      <p>
        Email text is processed by Google&apos;s Gemini models on Google Cloud only to extract those bill facts. It is
        not used to train models and is not shared with anyone else.
      </p>
      <p>
        Plex&apos;s use and transfer of information received from Google APIs adheres to the{" "}
        <a className="underline" href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noreferrer">
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements.
      </p>

      <h2>GitHub</h2>
      <p>
        If you connect GitHub for a task or a crew, Plex lends that access only to the agent doing that work, only for
        the repository the task names, and deletes the token when the work ends.
      </p>

      <h2>How Plex uses your information</h2>
      <ul>
        <li>To run the features you use: tasks, crews, payments, receipts, bills and invoices.</li>
        <li>To check work and payments against your rules and limits.</li>
        <li>Plex does not sell your information or use it for advertising.</li>
      </ul>

      <h2>Where it is stored</h2>
      <p>
        Data is stored with Convex. Payments are handled by PayPal. AI features use Google Cloud (Vertex AI). Each
        processes data only to provide its service to Plex.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>Disconnect Google at any time from the Everyday page. Plex revokes its access with Google and deletes the stored token.</li>
        <li>You can also remove Plex&apos;s access from your Google Account&apos;s security settings.</li>
        <li>To have your data deleted, email us at the address below.</li>
      </ul>

      <h2>Contact</h2>
      <p>
        Questions or requests:{" "}
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
