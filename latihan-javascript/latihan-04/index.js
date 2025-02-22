const axios = require('axios').default;

async function getUser() {
    try {
        const response = await axios.get('https://otakudesu-api.herokuapp.com/api/home');
        const api = response.data.home.on_going
        console.log(api[0]);
        console.log(api[1]);
        console.log(api[2]);
        console.log(api[3]);
        console.log(api[4]);
    } catch (error) {
        console.error(error);
    }
}

getUser();