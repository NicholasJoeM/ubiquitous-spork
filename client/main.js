const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const adviceBtn = document.getElementById("adviceButton");
const jokeBtn = document.getElementById("jokeButton");

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getAdvice = () => {
    axios.get("http://localhost:4000/api/advice/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getJoke = () => {
    axios.get("http://localhost:4000/api/joke/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const addAdvice = () => {
    const newAdvice = document.getElementById("newAdvice").value;
    axios.post("http://localhost:4000/api/advice", { advice: newAdvice })
        .then(res => {
            alert(res.data);
        })
        .catch(error => {
            alert(error.response.data);
        });
};

const addFortune = () => {
    const newFortune = document.getElementById("newFortune").value;
    axios.post("http://localhost:4000/api/fortune", { fortune: newFortune })
        .then(res => {
            alert(res.data);
        })
        .catch(error => {
            alert(error.response.data);
        });
};

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
adviceBtn.addEventListener('click', getAdvice);
jokeBtn.addEventListener('click', getJoke);

document.getElementById("addAdviceButton").addEventListener("click", addAdvice);
document.getElementById("addFortuneButton").addEventListener("click", addFortune);
