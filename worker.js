export default {
  async fetch(request, env, ctx) {
    const urlsToPing = [
      "https://example.com",
      "https://httpbin.org/get",
      "https://api.ipify.org?format=json",
      "https://jsonplaceholder.typicode.com/posts/1"
    ];

    const results = await Promise.all(
      urlsToPing.map(async (url) => {
        try {
          const res = await fetch(url);
          return `✅ ${url} → ${res.status}`;
        } catch (err) {
          return `❌ ${url} → Error: ${err.message}`;
        }
      })
    );

    return new Response(results.join("\n"), { status: 200 });
  }
};
