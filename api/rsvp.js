const jsonHeaders = {
  "content-type": "application/json; charset=utf-8",
};

function send(res, status, payload) {
  res.statusCode = status;
  Object.entries(jsonHeaders).forEach(([key, value]) => res.setHeader(key, value));
  res.end(JSON.stringify(payload));
}

function cleanText(value) {
  return String(value || "").trim();
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("allow", "POST");
    send(res, 405, { error: "Method not allowed" });
    return;
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_PUBLISHABLE_KEY ||
    process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  const tableName = process.env.SUPABASE_RSVP_TABLE || "rsvps";

  if (!supabaseUrl || !supabaseKey) {
    send(res, 500, { error: "Supabase is not configured" });
    return;
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const name = cleanText(body.name);
  const phone = cleanText(body.phone);
  const guests = Number.parseInt(body.guests, 10);
  const language = cleanText(body.language) || "kk";

  if (!name || !Number.isInteger(guests) || guests < 1 || guests > 3) {
    send(res, 400, { error: "Invalid RSVP data" });
    return;
  }

  const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/${tableName}`, {
    method: "POST",
    headers: {
      apikey: supabaseKey,
      authorization: `Bearer ${supabaseKey}`,
      "content-type": "application/json",
      prefer: "return=minimal",
    },
    body: JSON.stringify({
      name,
      phone,
      guests,
      language,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    send(res, 502, { error: "Failed to save RSVP", details });
    return;
  }

  send(res, 200, { ok: true });
};
