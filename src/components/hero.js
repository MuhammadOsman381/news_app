import React from 'react'
import { useState,useEffect } from "react";
import { getDatabase, ref, get ,set} from 'firebase/database';
import {app} from './FireBase';
import Loader from './loader';

function Hero(){
   

    const [arraydata,setArrayData] = useState([ ]);
    const [loader,setLoader] = useState(true);
    const [expanded, setExpanded] = useState(false);

    async function fetchNews() {
           
            fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-03-06&sortBy=publishedAt&apiKey=6d60cc230fe5424cb955d5eafb128831&pageSize=99')
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
               
                // console.log(data.articles)
                (data.articles).forEach((article, index) => {
                    set(ref(getDatabase(app), 'articles/' + index), article)
                        .then(() => {
                           
                          console.log(article)
                        })
                        .catch(error => {
                            console.error('Error uploading data:', error);
                        });
                });
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
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

            

        const toggleExpanded = () => {
            setExpanded(!expanded);
        };
    

    useEffect(()=>{
    fetchdata();
    fetchNews();
    // console.log(arraydata);
   
        },[])



    return(
        <div>
            <div className='grandparent  w-auto h-auto flex flex-col items-center justify-center  justify-center gap-[0vw] '>
                <div className=' w-auto h-auto p-4 '>
                <h1 className=' w-[90vw] h-[10vh] font-bold text-[2.2vw] max-sm:text-[3vh] max-sm:mt-[0vh]  max-sm:h-[5vh]' >Top-HeadLines</h1>
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
                   
                        {/* <button className='btn' onClick={toggleExpanded}>
                            {expanded ? 'Read Less' : 'Read More'}
                        </button> */}
                    </div>
                    </div>
                ))}
               
                </div>
            </div>
        </div>
    )
}

export default Hero;