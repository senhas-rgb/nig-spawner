const webhookURL = "https://discord.com/api/webhooks/1353654454141849640/aCroGe7HbsP6HW3WNl6fXolsqCq0pEoeYd5TSUuGMz-nzZaVbS0CsHKK6sH_VU-CjgQm"; // imagine if you steal the webhook bruh


let userInput = prompt("PASSWORD: ");

if (userInput === "I am not a nigger") {
    const data = {
        content: `👋 New visitor!\n🖥️ Browser: ${navigator.userAgent}\n📏 Screen: ${window.screen.width}x${window.screen.height}\n🔗 Referrer: ${document.referrer || "Direct Visit"}\nThey entered the correct password`,
    };
    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
        .catch(error => console.error("Error sending message:", error));
} else {
    const data = {
        content: `👋 New visitor!\n🖥️ Browser: ${navigator.userAgent}\n📏 Screen: ${window.screen.width}x${window.screen.height}\n🔗 Referrer: ${document.referrer || "Direct Visit"}\nWrong password intruder`,
    };
    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
        .catch(error => console.error("Error sending message:", error));
    alert("Wrong password, your a nigger");
    location.reload();
}