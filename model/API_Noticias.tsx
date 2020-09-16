import React, {useState, useEffect} from 'react'
// import HTTPCliente from './HTTPClient'
// import axios from "axios";


// export const ListNoticeAll = () => {
//   const [loading, setLoading] = useState(true);
//   const [list, setList] = useState([])

//   useEffect(() => {
//     getNoticeAll()
//   },[])

//   const getNoticeAll = async() => {
//     try {
//       await axios.get("https://dev.azzinformatica.com/api/v1/noticia/listar")
//       .then(response => {
//         const rpta = response .data;
//         setList(rpta);
//         setLoading(false);
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return {loading, list}

// }

export const NoticeAll = () => {
  const [list, setList] = useState([])
  const [loading, setLoaging] = useState(true)
  
  const getNoticeAll = async () => {
    const response = await fetch("https://dev.azzinformatica.com/api/v1/noticia/listar")
    const rpta = await response.json()
    setLoaging(false)
    setList(rpta.data)
  }
  
  useEffect(() => {
    getNoticeAll()
  },[])

  return { loading, list }
}

export const NoticeAllId = ( id: number) => {
  const [list, setList] = useState([])
  const [loading, setLoaging] = useState(true)
  
  const getNoticeAllId = async () => {
    const response = await fetch("https://dev.azzinformatica.com/api/v1/noticia/recuperar?id="+id)
    const rpta = await response.json()
    setLoaging(false)
    setList(rpta.data)
  }
  
  useEffect(() => {
    getNoticeAllId()
  },[])

  return { loading, list }
}