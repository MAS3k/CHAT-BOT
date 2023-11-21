
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}
const Time = getCurrentTime();


 let timeVar = document.getElementById("time");
 timeVar.innerHTML= `Sent at: ${Time}`;

function addMessage(text, isUser = false) {
    const messageContainer = document.querySelector(".chat-container");
    const currentTime = getCurrentTime();

    const message = document.createElement("div");
    message.classList.add("message", isUser ? "user-message" : "bot-message");
    message.textContent = isUser ? `User: ${text}` : `Chatbot: ${text}`;
    message.innerHTML += `<div class="timestamp">Sent at: ${currentTime}</div>`;
    messageContainer.appendChild(message);

    if (isUser) {
        const userInput = document.getElementById("user-input");
        userInput.value = "";
    }
}

function respondToUserInput(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    let botResponse = "";

    switch (true) {
        case lowerCaseMessage.includes("how are you"):
            botResponse = "I am fine, thank you!";
            break;
        case lowerCaseMessage.includes("weather"):
            botResponse = "Today weather was too hot And night will be cold.";
            break;
            case lowerCaseMessage.includes("i love you"):
            botResponse = "sorry i have no feeling i am just bot!";
            break;
        case lowerCaseMessage.includes("how was abdullah in coding"):
            botResponse = "its too bad in coding they will learn it as soon as possiable.";
            break;
        default:
            botResponse = "Thanks for your message!";
            break;
    }

    return botResponse;
}

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const userMessage = userInput.value.trim();

    if (userMessage !== "") {
        addMessage(userMessage, true);

    
        const botResponse = respondToUserInput(userMessage);
        addMessage(botResponse);

        userInput.disabled = true;
        setTimeout(function () {
            userInput.disabled = false;
        }, 3000);
    }
}