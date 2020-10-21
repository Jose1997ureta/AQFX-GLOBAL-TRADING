import React, {useState, useEffect} from 'react'
import { AsyncStorage } from 'react-native'
import { theme } from '../constants'
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


// NOTICIAS
export const NoticeAll = () => {
  const [list, setList] = useState([])
  const [loading, setLoaging] = useState(true)
  
  const getNoticeAll = async () => {
    const response = await fetch("https://dev.azzinformatica.com/api/v1/noticia/listar_app")
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

// LIVE
export const LiveAll = () => {
  const [list, setList] = useState([])
  const [loading, setLoaging] = useState(true)
  
  const getLiveAll = async () => {
    const response = await fetch("https://dev.azzinformatica.com/api/v1/en_vivo/listar_app")
    const rpta = await response.json()
    setLoaging(false)
    setList(rpta.data)
  }
  
  useEffect(() => {
    getLiveAll()
  },[])

  return { loading, list }
}

export const Live2All = () => {
  const [list, setList] = useState([])
  const [loading, setLoaging] = useState(true)
  
  const getLive2All = async () => {
    const response = await fetch("https://dev.azzinformatica.com/api/v1/clase_maestra/listar_app")
    const rpta = await response.json()
    setLoaging(false)
    setList(rpta.data)
  }
  
  useEffect(() => {
    getLive2All()
  },[])

  return { loading, list }
}

// export const GETLIST = (ruta:string) => {
//   const [list, setList] = useState([])
//   const [loading, setLoaging] = useState(true)

//   const getAll = async () => {
//     const response = await fetch(`${theme._baseURL}${ruta}`)
//     const rpta = await response.json()
//     setLoaging(false)
//     setList(rpta.data)
//   }
  
//   useEffect(() => {
//     getAll()
//   },[])

//   return { loading, list }
// }

export const LOGIN = async () => {
  const [list, setList] = useState([])
  const [loading, setLoaging] = useState(true)

  const response = await fetch(`https://dev.azzinformatica.com/api/v1/cliente/login?usuario=jhon&clave=pierre`)
  const rpta = await response.json()
  setLoaging(false)
  setList(rpta.data)
  
  return { loading, list }
}

export const GET_CURSOS = () => {
  const [list, setList] = useState([])
  const [loading, setLoaging] = useState(true)
  
  const getData = async () => {
    const response = await fetch("https://dev.azzinformatica.com/api/v1/grupo/listar_app")
    const rpta = await response.json()
    setLoaging(false)
    setList(rpta.data)
  }
  
  useEffect(() => {
    getData()
  },[])

  return { loading, list }
}

export const GET_VIDEOS = (idCurso:any) => {
  const [list, setList] = useState([])
  const [loading, setLoaging] = useState(true)
  
  const getData = async () => {
    const response = await fetch(`https://dev.azzinformatica.com/api/v1/educacion/listar_app?fk_grupo=${idCurso}`)
    const rpta = await response.json()
    setLoaging(false)
    setList(rpta.data)
  }
  
  useEffect(() => {
    getData()
  },[])

  return { loading, list }
}

export const GET_CURSOS_ASISTIDO = () => {
  const [listCount, setListCount] = useState([])
  // const [loading2, setLoaging2] = useState(true)
  
  const getData = async () => {
    const idCliente = await AsyncStorage.getItem("UserLogin");
    const response = await fetch(`https://dev.azzinformatica.com/api/v1/educacion_cliente/obtener_curso_asistido?fk_cliente=${idCliente}`)
    const rpta = await response.json()
    // setLoaging2(false)
    setListCount(rpta.data)
  }
  
  useEffect(() => {
    getData()
  },[])

  return { listCount }
}

export const GET_CURSOS_INDEX = (idCurso:any) => {
  const [listIndex, setListIndex] = useState([])
  // const [loading2, setLoaging2] = useState(true)
  
  const getData = async () => {
    const idCliente = await AsyncStorage.getItem("UserLogin");
    const response = await fetch(`https://dev.azzinformatica.com/api/v1/educacion_cliente/listar_app?fk_grupo=${idCurso}&fk_cliente=${idCliente}`)
    const rpta = await response.json()
    // setLoaging2(false)
    setListIndex(rpta.data)
  }
  
  useEffect(() => {
    getData()
  },[])

  return { listIndex }
}

export const GET_QUESTIONARIO = (idCurso:any) => {
  const [list, setList] = useState([])
  const [loading, setLoaging] = useState(true)
  
  const getData = async () => {
    const response = await fetch(`https://dev.azzinformatica.com/api/v1/educacion/recuperar_questionario?fk_educacion=${idCurso}`)
    const rpta = await response.json()
    setLoaging(false)
    setList(rpta.data)
    // await AsyncStorage.setItem("examen", "rpta.data");
  }
  
  useEffect(() => {
    getData()
  },[])

  return { loading ,list }
}
