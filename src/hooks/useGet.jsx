import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const useGet = ({ url, key }) => {

     const getData = async () => {
            let res = axios.get(`https://fakestoreapi.com/${url}`)
            return res
    
        }
    
        const { data, isLoading, error } = useQuery({
            queryKey: key,
            queryFn: getData,
        })
  return  {data , isLoading , error}
  
}

export default useGet