import React from 'react'
import { useState,useEffect } from "react";

function Hero(){
    
    const [datafetched,setDataFetched] = useState('');
    // const [image,setImage] = useState(null);
    // const [title,setTitle] = useState(null);
    // const [content,setContent] = useState(null);
    // const [indexno,setIndex] = useState(0);
    // let API_KEY ='18c670ea70fe6b5a81213e702cccaf8b'
    // let API_KEY = '6d60cc230fe5424cb955d5eafb128831'
    // let API_URL = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`
    // console.log(API_URL)
   
    // useEffect(()=>{

    //     fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${key.api}`)
    //     .then(response => {
    //         if (!response.ok) {
    //           throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //       })
    //     .then(data=>{
    //         setDataFetched(data)

    //         const array = (data.articles).map((element)=>{
    //             var parent = document.querySelector('.parent');
               
    //             var childelem = document.createElement('div');
    //             childelem.className = 'child';
    //             parent.appendChild(childelem);
    
    //             var data = document.createElement('div');
    //             data.className = 'data';
    //             childelem.appendChild(data);
                
    //             var image = document.createElement('img');
    //             image.className = 'image';
    //             image.src = element.urlToImage; 
    //             childelem.appendChild(image);
    
    //             var title = document.createElement('h1');
    //             title.className ='title'
    //             title.textContent = element.title
    //             data.appendChild(title);
    
    //             var content = document.createElement('p');
    //             content.className = 'content'
    //             content.textContent = element.content;
    //             data.appendChild(content);

    //             // console.log(element)
    //         })
    //         // datafetched.articles.forEach(function(element, index) {
    //         //     var parent = document.querySelector('.parent');
               
    
    //         //     var childelem = document.createElement('div');
    //         //     childelem.className = 'child';
    //         //     parent.appendChild(childelem);
    
    //         //     var data = document.createElement('div');
    //         //     data.className = 'data';
    //         //     childelem.appendChild(data);
                
    //         //     var image = document.createElement('img');
    //         //     image.className = 'image';
    //         //     image.src = element.urlToImage; 
    //         //     childelem.appendChild(image);
    
    //         //     var title = document.createElement('h1');
    //         //     title.className ='title'
    //         //     title.textContent = element.title
    //         //     data.appendChild(title);
    
    //         //     var content = document.createElement('p');
    //         //     content.className = 'content'
    //         //     content.textContent = element.content;
    //         //     data.appendChild(content);
    //         // })
    //         console.log(datafetched);
    //         // console.log(Data)
    //         document.querySelector('.child').style.display ='none';
            
    //     })
    //     .catch(error => 
    //         console.error('Error fetching news data:', error
    //         ));

    // },[])
    
    const apiKey = '6d60cc230fe5424cb955d5eafb128831'
    useEffect(()=>{
        async function fetchNews() {
            const url = 'https://newsapi.org/v2/top-headlines?country=us';
            const headers = new Headers();
            headers.append('Authorization', apiKey);

            try {
                const response = await fetch(url, { headers });
          
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
          
              const data = await response.json();
              console.log(data);
              const array = (data.articles).map((element)=>{
                            var parent = document.querySelector('.parent');
                           
                            var childelem = document.createElement('div');
                            childelem.className = 'child';
                            parent.appendChild(childelem);
                
                            var data = document.createElement('div');
                            data.className = 'data';
                            childelem.appendChild(data);
                            
                            var image = document.createElement('img');
                            image.className = 'image';
                            image.src = element.urlToImage; 
                            childelem.appendChild(image);
                
                            var title = document.createElement('h1');
                            title.className ='title'
                            title.textContent = element.title
                            data.appendChild(title);
                
                            var content = document.createElement('p');
                            content.className = 'content'
                            content.textContent = element.content;
                            data.appendChild(content);
            
                            // console.log(element)
                        })
            } catch (error) {
              console.error('There was a problem with the fetch operation:', error);
            }
          }
          
          fetchNews();
          document.querySelector('.child').style.display ='none';
    },[])

 

    return(
        <div>
            <div className='grandparent  w-[100vw] h-auto flex flex-col items-center justify-center  justify-center gap-[0vw] '>
                <div className=' w-[90vw] mt-[1.5vw]'>
                <h1 className='font-bold text-[2.5vw]'>BitCoin-News</h1>
                </div>
                <div className='parent 1st_col w-auto h-auto gap-[1vw]'>
                
                    <div className='child' id='child' >
                        {/* <div className='con'> */}
                        <img className='image' id='image' />
                        <div className='data'>

                            <h1 className='title'></h1>
                        <p className='content'>
                        </p>
                        
                        <span></span>
                        </div>
                    {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;