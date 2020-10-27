import Axios from "axios"

import axios from 'axios'

export default{ fetchArticles(context){
    axios.get('/api/articles')
    .then((response)=>{
        console.log(response.data.articles)
        context.commit("SET_ARTICLES",response.data.articles)
     })
   }
}