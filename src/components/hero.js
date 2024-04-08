import React from 'react'
import { useState,useEffect } from "react";
import { getDatabase, ref, get ,set} from 'firebase/database';
import {app} from './FireBase';
import Loader from './loader';
import axios from 'axios';
function Hero(){
   
    const [fetchednews,setFetchedNews] = useState([]);
    const [arraydata,setArrayData] = useState([]);
    const [loader,setLoader] = useState(true);
    const [expanded, setExpanded] = useState(false);

    async function fetchNews() {
  
            axios({
                method: 'get',
                url: 'https://newsapi.org/v2/everything?q=apple&from=2024-04-07&to=2024-04-07&sortBy=popularity&apiKey=6d60cc230fe5424cb955d5eafb128831',
                // responseType: 'stream'
              })
                .then(function (response) {
                //   console.log(response.data.articles);
                  setFetchedNews(response.data.articles)
                      response.data.articles.forEach((article, index) => {
                          set(ref(getDatabase(app), 'articles/' + index), article)
                              .then(() => {
                                    console.log(article);
                              })
                              .catch(error => {
                                  console.error('Error uploading data:', error);
                              });
                      });
                });
          
            } 
            
          
        const fetchdata = () =>{
            const db = getDatabase(app);
            const refer = ref(db,'articles');
    
            get(refer).then((snapshot) => {
              const array = Object.values(snapshot.val());
              setLoader(false);
             setArrayData(array);
            //  console.log(snapshot.val())
        });
    }

            

    

    useEffect(()=>{  
    fetchNews();
        },[fetchednews])

    useEffect(()=>{
        fetchdata();
    },[arraydata])



    return(
        <div>
            <div className='grandparent  w-auto h-auto flex flex-col items-center justify-center  justify-center gap-[0vw] '>
                <div className='tp w-auto h-auto p-4 '>
                <h1 className=' w-[90vw] h-[10vh] font-bold text-[2vw] max-sm:text-[3vh] max-sm:mt-[0vh]  max-sm:h-[5vh]' >Top-HeadLines</h1>
                </div>
                <div className='parent     w-[90vw] h-auto '>
               
                    {loader ?
                    (
                        <Loader/>
                      ) :
                    arraydata.map((item) => (
                         <div className='child'>
                          
                            <img src={item.urlToImage} alt="" className='image'/>
                     
                            <div className='content'>
                    <div  key={item} className='title'>   {item.title} </div>

                  
                            <div className='desc' key={item.title}>{item.content}</div>
                
                    </div>
                    </div>
                ))}
               
                </div>
            </div>
        </div>
    )
}

export default Hero;