import './App.css';
import axios from "axios";
import { useState } from 'react';
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import React from 'react'
import china from './images/icons8-china-58.png'
import conflict from './images/icons8-conflict-64.png'
import covid from './images/icons8-covid-64.png'
import japan from './images/icons8-japan-64.png'
import korea from './images/icons8-korea-64.png'
import n_korea from './images/icons8-north-korea-48.png'
import dice from './images/dice.png'
import about from './images/about.png'
import news from './images/news.png'
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
//https://www.youtube.com/watch?v=4fCr1IepJRw
//https://javascript.plainenglish.io/display-api-data-using-axios-in-a-react-app-with-hooks-eb9ca298f27


//Linke Preview: https://www.npmjs.com/package/@streben/react-link-preview
//idea is to add a relevancy RATING?
//add button to list notable news sources

const options = {
  method: 'GET',
  url: 'https://east-china-news.p.rapidapi.com/news/conflict',
  headers: {
    'X-RapidAPI-Host': 'east-china-news.p.rapidapi.com',
    'X-RapidAPI-Key': '80ce0759c9mshe3ab43f2d0c7a14p1e9db2jsn89f2b419cb42'
  }
};

const options2 = {
  method: 'GET',
  url: 'https://east-china-news.p.rapidapi.com/news/disease',
  headers: {
    'X-RapidAPI-Host': 'east-china-news.p.rapidapi.com',
    'X-RapidAPI-Key': '80ce0759c9mshe3ab43f2d0c7a14p1e9db2jsn89f2b419cb42'
  }
};
const options3 = {
  method: 'GET',
  url: 'https://east-china-news.p.rapidapi.com/korea',
  headers: {
    'X-RapidAPI-Host': 'east-china-news.p.rapidapi.com',
    'X-RapidAPI-Key': '80ce0759c9mshe3ab43f2d0c7a14p1e9db2jsn89f2b419cb42'
  }
};
const options4 = {
  method: 'GET',
  url: 'https://east-china-news.p.rapidapi.com/japan',
  headers: {
    'X-RapidAPI-Host': 'east-china-news.p.rapidapi.com',
    'X-RapidAPI-Key': '80ce0759c9mshe3ab43f2d0c7a14p1e9db2jsn89f2b419cb42'
  }
};
const options5 = {
  method: 'GET',
  url: 'https://east-china-news.p.rapidapi.com/china',
  headers: {
    'X-RapidAPI-Host': 'east-china-news.p.rapidapi.com',
    'X-RapidAPI-Key': '80ce0759c9mshe3ab43f2d0c7a14p1e9db2jsn89f2b419cb42'
  }
};
const options6 = {
  method: 'GET',
  url: 'https://east-china-news.p.rapidapi.com/news',
  headers: {
    'X-RapidAPI-Host': 'east-china-news.p.rapidapi.com',
    'X-RapidAPI-Key': '80ce0759c9mshe3ab43f2d0c7a14p1e9db2jsn89f2b419cb42'
  }
};


const imageStyles = { maxWidth: 20, maxHeight: 20 };

function App() {
  //state is defaulted as empty until updated, specifically for click data when one button is clicked
  //we set the state to nonempty -> when we click on other buttons that do not display articles we set to empty
  const [click_data,set_click_data] = useState("");
  const [random_click_data,set_random_click_data] = useState("");
  const [url_data,set_url_Data] = useState("");
  //used for About This Project
  const [text_data,set_text] = useState(false);
  const [click_times,set_click] = useState(0);
  var url_list = []
  const desc_len = 75
  const bck_color = "#007f99cc"
  const text_color = "#000000cc"
  const prim_color = "#cdda18cc"
  const Error = <h className="error">This Article is Not Found. <br/> Please Refresh or Ignore</h> ; 
 //#cdda18cc
  //const is used for about page, sets state to only show some text
  const text_Data = () => {
    set_click_data("")
    set_random_click_data("")
    set_text(true)
  }

  function Noraml_State(){
    set_click_data("Clicked")
    set_random_click_data("")
    set_url_Data(url_list)
    set_text(false)
  }

  const getData = () => {
  axios.request(options)
    .then(function (response) {
    for (var i = 0; i < response.data.length; i++) {
      //parses for duplicates
      if(url_list.includes(response.data[i].url)==false)
        url_list.push(response.data[i].url);
    } 
    Noraml_State()
    })
    .catch(function (error) {
    console.error(error);
    });
  }
  const getData2 = () => {
    axios.request(options2)
      .then(function (response) {
      for (var i = 0; i < response.data.length; i++) {
        if(url_list.includes(response.data[i].url)==false)
          url_list.push(response.data[i].url);
      } 
      Noraml_State()
      })
      .catch(function (error) {
      console.error(error);
      });
    }
    const getData3 = () => {
      axios.request(options3)
        .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          if(url_list.includes(response.data[i].url)==false)
            url_list.push(response.data[i].url);
        } 
        Noraml_State()
        })
        .catch(function (error) {
        console.error(error);
        });
      }
      const getData4 = () => {
        axios.request(options4)
          .then(function (response) {
          for (var i = 0; i < response.data.length; i++) {
            if(url_list.includes(response.data[i].url)==false)
              url_list.push(response.data[i].url);
          } 
          Noraml_State()
          })
          .catch(function (error) {
          console.error(error);
          });
        }
        const getData5 = () => {
          axios.request(options5)
            .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
              if(url_list.includes(response.data[i].url)==false)
                url_list.push(response.data[i].url);
            } 
            Noraml_State()
            })
            .catch(function (error) {
            console.error(error);
            });
          }
          const getData6 = () => {
            axios.request(options6)
              .then(function (response) {
              for (var i = 0; i < response.data.length; i++) {
                if(url_list.includes(response.data[i].url)==false)
                  url_list.push(response.data[i].url);
              }
              set_click_data("")
              set_random_click_data("Clicked")
              set_url_Data(url_list)
              set_text(false)
              })
              .catch(function (error) {
              console.error(error);
              });
            }
  return (
    <div className="App">
      <header className="App-header">
        <Bounce left>
        <h className="h2"> Online East Asian News Aggregator</h>
        </Bounce>
        <Zoom>
        <img src={news}></img>
        </Zoom>
        <br/>
        <Bounce right>
        <h className="h1">
        Please Click the Buttons Below to preview articles or Learn More About this project. <br/>
        Each Button specializes in different topics. Also you can click the article to be redirected. <br/>
        Note: News Paper companies frequently move or delete articles, please keep that in mind.<br/>
        Created by Winsor Tse <br/>
        </h>
        </Bounce>
      <br/>
      <Fade top>
      <div class="flex-container-button"> 
        <button class="button-52" role="button" onClick={getData}> <img src={conflict} style={imageStyles}/>Conflict/War News<img src={conflict} style={imageStyles} /></button>
        <button class="button-52" role="button" onClick={getData2}> <img src={covid} style={imageStyles}/>Covid News <img src={covid} style={imageStyles}/></button>
        <button class="button-52" role="button" onClick={text_Data}> <img src={about} style={imageStyles}/> About This Project <img src={about} style={imageStyles}/></button>
      </div>
      <br/>
      <div class="flex-container-button"> 
      <button class="button-52" role="button" onClick={getData4}> <img src={japan} style={imageStyles}/> Japanese News <img src={japan} style={imageStyles}/></button>
        <button class="button-52" role="button" onClick={getData5}> <img src={china} style={imageStyles}/> Chinese News <img src={china} style={imageStyles}/> </button>
        <button class="button-52" role="button" onClick={getData3}> <img src={korea} style={imageStyles}/>Korean News <img src={n_korea} style={imageStyles}/></button>
        <button class="button-52" role="button" onClick={getData6}> <img src={dice} style={imageStyles}/> Random News About China/Korea/Japan <img src={dice} style={imageStyles}/> </button>
      </div>
      </Fade>
        <div class="flex-container"> 
               {click_data && <div> <LinkPreview url={url_data[0]} width="400px" height="700px" descriptionLength={desc_len} backgroundColor={bck_color} secondaryTextColor={text_color} fallback={Error} primaryTextColor={prim_color}/> </div>}
               {click_data && <div> <LinkPreview url={url_data[1]} width="400px" height="700px" descriptionLength={desc_len} backgroundColor={bck_color} secondaryTextColor={text_color} fallback={Error} primaryTextColor={prim_color}/> </div>}
               {click_data && <div> <LinkPreview url={url_data[2]} width="400px" height="700px" descriptionLength={desc_len} backgroundColor={bck_color} secondaryTextColor={text_color} fallback={Error} primaryTextColor={prim_color}/> </div>} 
        </div>
        <div class="flex-container"> 
               {click_data && <div> <LinkPreview url={url_data[3]} width="400px" height="700px" descriptionLength={desc_len} backgroundColor={bck_color} secondaryTextColor={text_color} fallback={Error} primaryTextColor={prim_color}/> </div>}
               {click_data && <div> <LinkPreview url={url_data[url_data.length-2]} width="400px" height="700px" descriptionLength={desc_len} backgroundColor={bck_color} secondaryTextColor={text_color} fallback={Error} primaryTextColor={prim_color}/> </div>}
               {click_data && <div> <LinkPreview url={url_data[url_data.length-1]} width="400px" height="700px" descriptionLength={desc_len} backgroundColor={bck_color} secondaryTextColor={text_color} fallback={Error} primaryTextColor={prim_color}/> </div>} 
        </div>
        <div class="flex-container">
              {random_click_data && <div> <LinkPreview url={url_data[Math.floor(Math.random() * url_data.length)]} width="400px" height="700px" descriptionLength={desc_len} backgroundColor={bck_color} secondaryTextColor={text_color} fallback={Error} primaryTextColor={prim_color}/> </div>}
        </div>
        <div class="flex-container2"> 
               {text_data && <div className='a'>
              <h className="h3">About This Project:</h> <br/>
              This Website uses a News Paper Website Scrapper built using Node.js. <br/>
              Backend: My API looks at the world sections of newspaper companies and scrapes for keywords. <br/>
              Frontend: Uses API info to display card previews of the articles <br/>
              <br/>
              What do Aggregators do? Aggregators fetches particular information or content all over the internet <br/>
              and aggregates that content at the one place. In simple words it saves your time of <br/>
              searching some information on different websites because it shows all the information <br/>
              you need from different source at one place. <br/> <br/>

              The News Sources used in the website include: <br/>
              The Guardian, NY Times, SCMP, CNN, Telegraph, <br/> NBC, Washington Post, ABC, BBC, and Straitistimes. <br/>
              If you want to check out my github and rapid api deployment, Check Below! <br/>
              <br/> <a href='https://rapidapi.com/winsor-tse/api/east-china-news'> <button className='button-1'>Rapid API</button> </a>
              <a href='https://github.com/winsor-tse/news-api'> <button className='button-1'>Git-Hub</button> </a> <br/> 
              </div>}
        </div>
        </header>
    </div>
  );
}

export default App;
