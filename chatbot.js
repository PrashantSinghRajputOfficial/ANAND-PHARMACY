// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Toggle chatbot
    chatbotToggle.addEventListener('click', function() {
        chatbotWindow.style.display = chatbotWindow.style.display === 'none' ? 'flex' : 'none';
    });

    chatbotClose.addEventListener('click', function() {
        chatbotWindow.style.display = 'none';
    });

    // Send message
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message === '') return;

        // Add user message
        addMessage(message, 'user');
        chatbotInput.value = '';

        // Simulate bot response
        setTimeout(function() {
            const response = getBotResponse(message.toLowerCase());
            addMessage(response, 'bot');
        }, 500);
    }

    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${sender}-message`;
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getBotResponse(message) {
        if (message.includes('hello') || message.includes('hi') || message.includes('namaste')) {
            return 'Namaste! Anand Pharmacy & Clinic mein aapka swagat hai. Main aapki kaise madad kar sakta hoon?';
        } else if (message.includes('appointment') || message.includes('book')) {
            return 'Appointment book karne ke liye WhatsApp par +91 9667811263 par message karein ya neeche appointment form bharein.';
        } else if (message.includes('emergency')) {
            return 'Emergency ke liye turant call karein: +91 9667811263. Hum 24/7 available hain!';
        } else if (message.includes('timing') || message.includes('time') || message.includes('khula')) {
            return 'Hum 24 ghante khule rehte hain. Emergency services har waqt available hai.';
        } else if (message.includes('address') || message.includes('location') || message.includes('kahan')) {
            return 'Hamara address: Anand Bhavan, Badiyaal Road, Nandera Chauraha, Nandera (Bandikui). Google Maps link website par available hai.';
        } else if (message.includes('medicine') || message.includes('dawa')) {
            return 'Hum ethical aur generic dono medicines provide karte hain. Home delivery bhi available hai. Apna prescription WhatsApp karein.';
        } else if (message.includes('test') || message.includes('blood') || message.includes('sugar')) {
            return 'Hum blood test, sugar test, BP check aur bahut saari medical tests provide karte hain. Appointment ke liye call karein.';
        } else if (message.includes('doctor')) {
            return 'Hamare paas experienced doctors hain including Pro. Bhanwar Singh. Visiting consultants bhi available hain.';
        } else if (message.includes('price') || message.includes('cost') || message.includes('charge')) {
            return 'Prices ke liye please call karein +91 9667811263. Hum affordable rates provide karte hain.';
        } else if (message.includes('delivery') || message.includes('home')) {
            return 'Haan! Hum free home delivery provide karte hain local area mein. Apna prescription WhatsApp karein.';
        } else {
            return 'Dhanyavaad! Zyada jaankari ke liye call karein +91 9667811263 ya WhatsApp karein.';
        }
    }

    // Initial greeting
    setTimeout(function() {
        addMessage('Namaste! Main aapki kaise madad kar sakta hoon?', 'bot');
    }, 1000);
});
