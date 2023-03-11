function enableChat() { //returns true if success, false if not
    //get inside the iframes where the player exists
    let tool_content = document.getElementById("tool_content");
    let studentId = tool_content.contentDocument.getElementById("root").getAttribute("data-user_login");
    let studentName = tool_content.contentDocument.getElementById("root").getAttribute("data-user_name");
    console.log(studentId);
    
    let video_frame = tool_content.contentDocument.getElementsByClassName("xnvc-video-frame")[0];

    if(video_frame != null) {
        const chat_box = document.createElement("div")
        chat_box.id = "chat-box";
        chat_box.style.border = "2px solid black";
        chat_box.style.width = "100px";
        chat_box.style.height = "100px";
        video_frame.contentDocument.body.appendChild(chat_box);
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
                sendResponse({method: "enableChat", status: "success"});
            } else {
                sendResponse({method: "enableChat", status: "fail"});
            }
        }
    }
)