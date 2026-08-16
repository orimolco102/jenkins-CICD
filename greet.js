const greetings = [
  "Hello there, it's wonderful to see you!",
  "Hi! I hope you're having a fantastic day.",
  "Good morning! Wishing you a bright and productive start.",
  "Good afternoon! I hope your day is going smoothly so far.",
  "Good evening! I hope you had a great day today.",
  "Hey there! Great to connect with you.",
  "Welcome! We're so glad you decided to join us.",
  "Greetings and warm wishes to you today!",
  "Good night! I hope you had a good day."
];


function randomGreets() {
    const index = Math.floor(Math.random() * greetings.length);

    return greetings[index];
}

module.exports = {randomGreets, greetings}