// Made by ZheHacK
addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
// Made by ZheHacK
async function handleRequest(request) {
  try {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response(`Made by ZheHacK`);
    }

    let targetUrl;
    if (url.pathname === "/dcub") {
    
      targetUrl = "https://lic.drmtoday.com/license-proxy-widevine/cenc/?specConform=true";
    } else {
return new Response(`Made by ZheHacK`);
      targetUrl = request.url.slice(url.origin.length);
    }
 
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-G960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.181 Mobile Safari/537.36",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS, GET, POST, PUT, DELETE",
          "Access-Control-Allow-Headers": "x-dt-custom-data, dt-custom-data, http-header-CustomData, x-dt-auth-token, x-dt-client-info, x-dt-follow-up-token, x-dt-csl-renewal-info, x-dt-csl-tracking-token, x-dt-resp-code, x-dt-li, origin, content-type, accept, x-requested-with, x-dt-fps-sync-info",
          "Access-Control-Allow-Credentials": "true",

        },
      }); 
    }

    const tokenUrl = "https://raw.githubusercontent.com/FlyinDVB/mastersafe/refs/heads/master/masterfilepen1.js";
    const tokenResponse = await fetch(tokenUrl);
    const tokenText = await tokenResponse.text();

    const modifiedRequest = new Request(request);
    // Setel header User-Agent sesuai yang Anda inginkan
    modifiedRequest.headers.set("User-Agent", "Mozilla/5.0 (Linux; Android 10; SM-G960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.181 Mobile Safari/537.36");

    modifiedRequest.headers.set("dt-custom-data", tokenText);

    let response = await fetch(targetUrl, {
      method: modifiedRequest.method,
      headers: modifiedRequest.headers,
      redirect: "follow",
      body: modifiedRequest.body,
    }); 

    response = new Response(response.body, response);
    response.headers.set("User-Agent", "Mozilla/5.0 (Linux; Android 10; SM-G960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.181 Mobile Safari/537.36");
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Credentials", "true");
    response.headers.set("Access-Control-Allow-Headers", "x-dt-custom-data,dt-custom-data,http-header-CustomData,x-dt-auth-token,x-dt-client-info,x-dt-follow-up-token,x-dt-csl-renewal-info,x-dt-csl-tracking-token,x-dt-resp-code,x-dt-li,origin,content-type,accept,x-requested-with,x-dt-fps-sync-info");
    response.headers.set("Access-Control-Allow-Methods", "POST,PUT,DELETE,GET,OPTIONS,HEAD,TRACE,PATCH");
    response.headers.delete("X-XSS-Protection");
    response.headers.set("Referer", "https://www.cubmu.com/");
    response.headers.set("Cache-Control", "public, max-age=3600");

    return response;
  } catch (e) {
    return new Response("Terjadi kesalahan dalam menangani permintaan: " + e.message, { status: 500 });
  }
}
