module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = [
            "The early bird gets the worm, but the second mouse gets the cheese.",
            "A conclusion is simply the place where you got tired of thinking.",
            "It is not certain that everything is uncertain.",
            "The greatest pleasure in life is doing what people say you cannot do.",
            "If at first you don't succeed, redefine success.",
        ];
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
    },

    getAdvice: (req, res) => {
        const advice = [
            "Take a deep breath, and focus on one thing at a time.",
            "Set small, achievable goals and work towards them every day.",
            "Remember that failure is a natural part of the learning process.",
            "Don't be afraid to ask for help or seek guidance from others.",
            "Believe in yourself and your abilities, and don't give up on your dreams.",
        ];
        let randomIndex = Math.floor(Math.random() * advice.length);
        let randomAdvice = advice[randomIndex];
        res.status(200).send(randomAdvice);
    },

    getJoke: (req, res) => {
        axios.get("https://official-joke-api.appspot.com/random_joke")
            .then(response => {
                const setup = response.data.setup;
                const punchline = response.data.punchline;
                const joke = `${setup} ${punchline}`;
                res.status(200).send(joke);
            })
            .catch(error => {
                res.status(500).send(error.message);
            });
    }

};
