import React from 'react'
import { useState,useEffect } from "react";

function Hero(){
    
    const [Data,setData] = useState('1');
    const [image,setImage] = useState(null);
    const [title,setTitle] = useState(null);
    const [content,setContent] = useState(null);
    const [indexno,setIndex] = useState(0);
    // let API_KEY ='18c670ea70fe6b5a81213e702cccaf8b'
    let API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=18c670ea70fe4b5a81213e702cccaf8b`
    // console.log(API_URL)

    useEffect(()=>{

        // const parent = document.querySelector('.parent');
        // const child = document.querySelector('.child');
        // var articleDiv = document.createElement('div');
        // articleDiv.classList.add('parent');
        //  parent.appendChild(child);

    },[])

    window.onload = function() {
        fetch(API_URL)
        .then(response => {
            return response.json();
      })
        .then(data=>{
            setData(data.articles)
            console.log(data)
            data.articles.forEach(function(element, index) {
                var parent = document.querySelector('.parent');
                var he1 = document.querySelector('.he1');

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

              
    
            });
            
            document.querySelector('.child').style.display ='none';
            
        })
        .catch(error => 
            console.error('Error fetching news data:', error
            ));
    };

 

    return(
        <div>
            <div className='grandparent  w-[100vw] h-auto flex flex-row  justify-center gap-[5vw] '>
                <div className='parent 1st_col w-auto h-auto gap-[1vw]'>
                
                    <div className='child' id='child' >
                        <div className='con'>
                        <img className='image' id='image' />
                        <div className='data'>

                            <h1 className='title'></h1>
                        <p className='content'>
                        </p>
                        
                        <span></span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;