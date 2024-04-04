import React from 'react'
import { useState,useEffect } from "react";
import { getDatabase, ref, get ,set} from 'firebase/database';
import {app} from './FireBase';


function Hero(){
   
    const [fetcheddata,setFetchedData] = useState();
    const [arraydata,setArrayData] = useState([ ]);
    const [title,setTitle] = useState('');
    const [img,setImg] =useState('');
    const [desc,setDesc] =useState('');
    // const apiKey = ''
    async function fetchNews() {
           
            fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6d60cc230fe5424cb955d5eafb128831')
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
             setArrayData(array);
            //  console.log(snapshot.val())
        });
    }

    useEffect(()=>{
    fetchdata();
    fetchNews();
    console.log(arraydata);
   
        },[])



    return(
        <div>
            <div className='grandparent  w-[100vw] h-auto flex flex-col items-center justify-center  justify-center gap-[0vw] '>
                <div className=' w-[90vw] mt-[1.5vw]'>
                <h1 className='heading font-bold text-[2.5vw]' >Top-HeadLines</h1>
                </div>
                <div className='parent  1st_col w-auto h-auto flex-col gap-[1vw]'>
               
                    {arraydata.map((item) => (
                         <div className='child'>
                          
                            <img src={item.urlToImage} alt="" className='image'/>
                     
                            <div className='content'>
                    <div  key={item} className='title'>   {item.title} </div>

                    <div key={item} className='con'> {item.content}        </div>
                    </div>
                    </div>
                ))}
               
                </div>
            </div>
        </div>
    )
}

export default Hero;