document.addEventListener('DOMContentLoaded', function () {
  const chatbotToggler = document.querySelector('.chatbot-toggler');
  const chatbot = document.querySelector('.chatbot');
  const closeBtn = document.querySelector('.close-btn');
  const chatbox = document.querySelector('.chatbox');
  const sendBtn = document.querySelector('#send-btn');
  const textarea = document.querySelector('textarea');

  // Function to toggle the chatbot visibility
  function toggleChatbot() {
    chatbot.classList.toggle('active');
  }

  // Function to send user message
  function sendMessage() {
    const userMessage = textarea.value.trim();
    
    if (userMessage !== "") {
      // Append user's message to the chatbox
      const userChat = document.createElement('li');
      userChat.classList.add('chat', 'outgoing');  // Add outgoing class for user message
      userChat.innerHTML = `<p>${userMessage}</p>`;
      chatbox.appendChild(userChat);

      // Clear the input area after sending the message
      textarea.value = "";

      // Scroll chatbox to the bottom
      chatbox.scrollTop = chatbox.scrollHeight;

      // Simulate chatbot response
      setTimeout(function() {
        const botMessage = "I'm a bot, how can I help you?";
        const botChat = document.createElement('li');
        botChat.classList.add('chat', 'incoming');  // Add incoming class for bot message
        botChat.innerHTML = `
          <span class="material-symbols-outlined">smart_toy</span>
          <p>${botMessage}</p>`;
        chatbox.appendChild(botChat);

        // Scroll chatbox to the bottom
        chatbox.scrollTop = chatbox.scrollHeight;
      }, 1000); // Simulate a 1-second delay for bot response
    }
  }

  // Open/close the chatbot when the button is clicked
  chatbotToggler.addEventListener('click', toggleChatbot);

  // Close the chatbot when the close button is clicked
  closeBtn.addEventListener('click', toggleChatbot);

  // Send message when clicking the send button
  sendBtn.addEventListener('click', sendMessage);

  // Allow pressing "Enter" key to send message
  textarea.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent new line
      sendMessage();
    }
  });
});
