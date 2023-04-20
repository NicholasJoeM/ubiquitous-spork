let fortunes = [
    "The early bird gets the worm, but the second mouse gets the cheese.",
    "A conclusion is simply the place where you got tired of thinking.",
    "It is not certain that everything is uncertain.",
    "The greatest pleasure in life is doing what people say you cannot do.",
    "If at first you don't succeed, redefine success.",
  ];
  
  let advice = [
    "Take a deep breath, and focus on one thing at a time.",
    "Set small, achievable goals and work towards them every day.",
    "Remember that failure is a natural part of the learning process.",
    "Don't be afraid to ask for help or seek guidance from others.",
    "Believe in yourself and your abilities, and don't give up on your dreams.",
  ];
  
  module.exports = {
    getCompliment: (req, res) => {
      const compliments = [
        "Gee, you're a smart cookie!",
        "Cool shirt!",
        "Your Javascript skills are stellar.",
      ];
      let randomIndex = Math.floor(Math.random() * compliments.length);
      let randomCompliment = compliments[randomIndex];
      res.status(200).send(randomCompliment);
    },
  
    getFortune: (req, res) => {
      let randomIndex = Math.floor(Math.random() * fortunes.length);
      let randomFortune = fortunes[randomIndex];
      res.status(200).send(randomFortune);
    },
  
    addFortune: (req, res) => {
      const { fortune } = req.body;
      if (!fortune) {
        res.status(400).send("Please provide a fortune");
      } else {
        fortunes.push(fortune);
        res.status(200).send(`Successfully added "${fortune}" to fortunes list`);
      }
    },
  
    getAdvice: (req, res) => {
      let randomIndex = Math.floor(Math.random() * advice.length);
      let randomAdvice = advice[randomIndex];
      res.status(200).send(randomAdvice);
    },
  
    addAdvice: (req, res) => {
      const { advice } = req.body;
      if (!advice) {
        res.status(400).send("Please provide an advice");
      } else {
        advice.push(advice);
        res.status(200).send(`Successfully added "${advice}" to advice list`);
      }
    },
  
    getJoke: (req, res) => {
      axios
        .get("https://official-joke-api.appspot.com/random_joke")
        .then((response) => {
          const setup = response.data.setup;
          const punchline = response.data.punchline;
          const joke = `${setup} ${punchline}`;
          res.status(200).send(joke);
        })
        .catch((error) => {
          res.status(500).send(error.message);
        });
    },
  };
  