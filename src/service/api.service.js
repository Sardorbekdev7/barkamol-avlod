import axios from "axios"

const url = 'http://185.65.202.40:4327/api'

export const getData=(token)=>{
  return(axios.get(`${url}/${token}/`))
}

export const getDataId = (token, id) => {
  return(axios.get(`${url}/${token}/${id}`))
}

