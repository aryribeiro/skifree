// Vercel Function: returns the visitor country from Vercel's edge geolocation header.
// Mirrors worker/index.js (Cloudflare) so the client code stays identical.
export default function handler(request, response) {
  const country = request.headers["x-vercel-ip-country"] || null;
  response.setHeader("Cache-Control", "private, no-store");
  response.status(200).json({ country });
}
