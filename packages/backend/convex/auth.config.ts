/**
 * Clerk → Convex auth. Clerk needs a JWT template named "convex" (audience
 * "convex"); its issuer is the Clerk app's public Frontend API domain (also
 * inside the publishable key). Set it with
 * `npx convex env set CLERK_JWT_ISSUER_DOMAIN https://<your-app>.clerk.accounts.dev`.
 * Falls back to the project's own Clerk app, so it also runs with no setup.
 * Without a Clerk session everyone is a guest exploring the demo world.
 */
const CLERK_ISSUER = process.env.CLERK_JWT_ISSUER_DOMAIN ?? "https://lenient-civet-2954.clerk.accounts.dev";

export default {
  providers: [{ domain: CLERK_ISSUER, applicationID: "convex" }],
};
