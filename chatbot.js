// Cargar el script de IBM Watson Assistant
(function() {
  const watsonAssistantChat = document.createElement('script');
  watsonAssistantChat.src = "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
  watsonAssistantChat.onload = function() {
    window.watsonAssistantChatOptions = {
      integrationID: "<<YOUR-INTEGRATION-ID>>", // Sustituye con tu Integration ID
      region: "us-south", // Cambia si usas otra región (por ejemplo, "eu-gb" o "au-syd")
      serviceInstanceID: "<<YOUR-ASSISTANT-ID>>", // Sustituye con tu Service Instance ID
      onLoad: function(instance) { instance.render(); }
    };
    setTimeout(function() {
      const t = document.createElement('script');
      t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
      document.head.appendChild(t);
    });
  };
  document.head.appendChild(watsonAssistantChat);
})();
