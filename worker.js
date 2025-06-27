
export default {
  async fetch(request, env, ctx) {
    const urlToPing = "https://www.google.com";

    try {
      const res = await fetch(urlToPing);
      const status = res.status;
      return new Response(`✅ Pinged ${urlToPing}, status: ${status}`, { status: 200 });
    } catch (err) {
      console.error(`❌ Error:`, err);
      return new Response(`❌ Failed to ping ${urlToPing}: ${err.message}`, { status: 500 });
    }
  }
};
