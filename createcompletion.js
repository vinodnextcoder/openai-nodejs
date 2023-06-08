const {openai} =require('./config');

const createCompletion = async(text)=>{
  let response;
    try {
      response =  await openai.createCompletion({
        "model": "text-davinci-003",
        "prompt": text
      });
      return response.data.choices[0].text;
    } catch (e) {
      console.log(e)
      return e.message
    }
}

module.exports = {
  createCompletion
};