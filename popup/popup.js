// window.addEventListener('DOMContentLoaded', () => {
//     const enableButton = document.getElementById("enableButton");
//     enableButton.addEventListener("click", () => {
//         chrome.tabs.query({active: true}, function(tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, {method: "enableChat"}, function(response) {
//                 if(response.method == "enableChat") {
//                     alert("Success: " + response.method);
//                 };
//             });
//         });
//     });
// });


window.addEventListener('DOMContentLoaded', () => {
    let enableButton = document.getElementById("enableButton");
    let resultText = document.getElementById("resultText");
    enableButton.addEventListener("click", async () => {
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        const response = await chrome.tabs.sendMessage(tab.id, {method: "enableChat"});
        if(response.method == "success") {
            resultText.textContent = "success";
        } else if(response.method == "fail") {
            resultText.textContent = "fail";
        } else {
            resultText.textContent = "error";
        }
      });
});