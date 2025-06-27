export default {
  async fetch(request, env, ctx) {
    return await pingUrls();
  },

  async scheduled(event, env, ctx) {
    await pingUrls();
  }
};

async function pingUrls() {
  const urlsToPing = [
    "https://a00c8698-adc3-453a-a1c8-0c7c37438995-00-1qcy8wlc98rso.sisko.replit.dev:3001/"
  ];

  const results = await Promise.all(
    urlsToPing.map(async (url) => {
      try {
        const res = await fetch(url);

        // Parse JSON response
        const data = await res.json();

        return `✅ ${url} → ${res.status} → ${data.message}`;
      } catch (err) {
        return `❌ ${url} → Error: ${err.message}`;
      }
    })
  );

  console.log(results.join("\n"));

  return new Response(results.join("\n"), { status: 200 });
}
