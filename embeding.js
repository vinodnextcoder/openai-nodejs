const {openai} =require('./config');

const createEmbedding = async(text)=>{
  let response;
    try {
      response = await openai.createEmbedding({
        model: "text-embedding-ada-002",
        input: text,
      });
      console.log(response.data)
      return response.data.data;
    } catch (e) {
      return e.message
    }
}
createEmbedding('joke')

module.exports = {
  createEmbedding  
};