import axios from 'axios'

const getQuiz = ({question}) => {
    const url = `https://opentdb.com/api.php?amount=${question}&category=21`;
    try
    {
        axios.get(url).then((res)=>{
            const result = (res.data);
            console.log(result);
        }).catch((err)=>{
            console.log(err.message);
        });
    }
    catch(err)
    {
        console.log(err);
    }
}

export default getQuiz 