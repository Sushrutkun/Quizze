import axios from 'axios'

const getQuiz = async(question) => {
    const url = `https://opentdb.com/api.php?amount=${question}&category=21`;

    const result=await axios.get(url).then((res) => {
        const result = (res.data);
        console.log(result);
    }).catch((err) => {
        console.log(err.message);
    });
    return(result);
}

export default getQuiz 