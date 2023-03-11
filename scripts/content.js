function enableChat() { //returns true if success, false if not
    let player_area = document.getElementById("player-area");
    // check if player_area is null
    if(player_area != null) {
        const chat_box = document.createElement("div")
        chat_box.id = "chat-box";
        chat_box.style.border = "2px solid black";
        chat_box.style.width = "100px";
        chat_box.style.height = "100px";
        player_area.appendChild(chat_box);
        return true;
    }else{
        return false;
    }
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "enableChat") {
            const success = enableChat();
            if(success) {
                sendResponse({method: "success"});
            } else {
                sendResponse({method: "fail"});
            }
        }
    }
)