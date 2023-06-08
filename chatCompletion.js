const {openai} =require('./config');

const chatCompletion = async(text)=>{
  let response;
    try {
      response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: text}],
      });
      return response.data.choices[0].message
    } catch (e) {
      return e.message
    }
}

module.exports = {
  chatCompletion
};
