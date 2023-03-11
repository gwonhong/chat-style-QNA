window.addEventListener('DOMContentLoaded', () => {
    let enableButton = document.getElementById("enableButton");
    let resultText = document.getElementById("resultText");
    enableButton.addEventListener("click", async () => {
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        const response = await chrome.tabs.sendMessage(tab.id, {method: "enableChat"});
        if(response.method == "enableChat") {
            if(response.status == "success") {
                resultText.textContent = "success";
            } else if(response.status == "fail") {
                resultText.textContent = "fail";
            } else {
                resultText.textContent = "error";
            }
        } else if (response.method == "test") {
            resultText.textContent = response.text;
        }

      });
});