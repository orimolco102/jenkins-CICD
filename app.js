const express = require('express');
const {randomGreets} = require("./greet");

const app = express();

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
})

app.get("/api/greet", (req, res) => {
    res.json({ greetings: randomGreets()})
})

app.get("/", (req, res) => {
    const greets = randomGreets();
    res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Greets Factory</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #ffecd2, #fcb69f);
                font-family: 'Segoe UI', Tahoma, sans-serif;
            }

            .card {
                background: #fff;
                padding: 40px 50px;
                border-radius: 20px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
                text-align: center;
                max-width: 420px;
            }

            .emoji {
                font-size: 60px;
                margin-bottom: 10px;
            }

            h1 {
                color: #333;
                margin-bottom: 15px;
                font-size: 28px;
            }

            p {
                color: #555;
                font-size: 18px;
                min-height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 20px;
                line-height: 1.4;
            }

            button {
                background: #ff7e5f;
                color: white;
                border: none;
                padding: 12px 28px;
                border-radius: 30px;
                font-size: 16px;
                cursor: pointer;
                transition: background 0.2s ease, transform 0.15s ease;
            }

            button:hover {
                background: #ff6347;
                transform: translateY(-2px);
            }

            button:active {
                transform: translateY(0);
            }
        </style>
    </head>
    <body>
        <div class="card">
            <div class="emoji">🍪</div>
            <h1>Greets Factory</h1>
            <p id="greetText">Hello there, it's wonderful to see you!</p>
            <button onclick="newGreet()">Give me more!</button>
        </div>

        <script>
            const greetings = [
                "Hello there, it's wonderful to see you!",
                "Hi! I hope you're having a fantastic day.",
                "Good morning! Wishing you a bright and productive start.",
                "Good afternoon! I hope your day is going smoothly so far.",
                "Good evening! I hope you had a great day today.",
                "Hey there! Great to connect with you.",
                "Welcome! We're so glad you decided to join us.",
                "Greetings and warm wishes to you today!"
            ];

            let lastIndex = 0;

            function newGreet() {
                let index;
                do {
                    index = Math.floor(Math.random() * greetings.length);
                } while (index === lastIndex);

                lastIndex = index;
                document.getElementById('greetText').textContent = greetings[index];
            }
        </script>
    </body>
    </html>
    `
    )
})

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
})