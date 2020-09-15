import React, {useState} from 'react'
import HTTPS from './HTTPClient'

const [loading, SetLoading] = useState(true);
const [list, SetList] = useState([])

export const ListNoticeAll = async() => {
  try{
    const response = await HTTPS.get('noticia/listar');
    if(response.status === 200) {
      // SetLoading(false);
      // SetList(response.data);

      return response.data;
    }else{
      return `hola`;
    }
  }catch (e){
    throw `${e}`;
  }
}