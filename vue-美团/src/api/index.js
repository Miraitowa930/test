/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-11-02 14:42:07
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-11-02 17:03:09
 */
import axios from '@/axios.js'

var api = {
    searchHotWord(){
        return  axios.get("/api/meituan/header/searchHotWords.json")
    },
    getSearchList(){
        return  axios.get("/api/meituan/header/search.json")
    },
    getMenuList(){
           return axios.get("/api/meituan/index/nav.json")
    },
    getResultList(){
          return axios.get('/api/meituan/index/resultsByKeywords.json')
    }

}

export default api;