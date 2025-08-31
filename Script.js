function sendMessage() {
  let userInput = document.getElementById("user-input").value;
  if (userInput.trim() === "") return;

  let chatBox = document.getElementById("chat-box");

  // Display user message
  let userMessage = document.createElement("div");
  userMessage.className = "message user-message";
  userMessage.innerText = userInput;
  chatBox.appendChild(userMessage);

  // Bot response
  let botMessage = document.createElement("div");
  botMessage.className = "message bot-message";
  botMessage.innerText = getBotResponse(userInput);
  chatBox.appendChild(botMessage);

  chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll
  document.getElementById("user-input").value = "";
}

function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! How can I help you today?";
  } else if (input.includes("how are you")) {
    return "I'm just a bot, but I'm doing great! Thanks for asking.";
  } else if (input.includes("bye")) {
    return "Goodbye! Have a great day!";
  } else if (input.includes("your name")) {
    return "I'm your friendly chatbot 🤖";
  } else {
    return "Sorry, I don’t understand that.";
  }
}
