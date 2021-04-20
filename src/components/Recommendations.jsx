import React, { Component } from "react";
import Slider from 'react-slick';
import '../style/Recommendations.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const linkedIn = [
  {
    name: "William Oliveira",
    role: "Software engineer at ESCALE",
    message: "Gabi is responsible, demonstrates exemplary professionalism and is very empathetic with the people who work on her team. She has all the technical and personal skills for high performance and good work within a team with an agile culture.",
    avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQFh6Bf0ckK_Kw/profile-displayphoto-shrink_200_200/0/1613999256171?e=1624492800&v=beta&t=EX1N8RYRwhVQ-mKh2ZYmkMrwqr-e8T2lVjQZez5HisA"
  },
  {
    name: "Tânagra Andria",
    role: "Front-End Development student at Laboratória",
    message: "Gabriella is an excellent programmer, an extremely skilled and creative professional, with extensive knowledge of logic and UX design.",
    avatar: "https://media-exp1.licdn.com/dms/image/C5603AQHwXDkAN2cWVA/profile-displayphoto-shrink_200_200/0/1614116918438?e=1624492800&v=beta&t=cP6kjf5WdLVc6-sfzOILq29IlXBKRg9mjGOrA5lpubg"
  },
  {
    name: "Roberta Kelly",
    role: "Front-End Developer",
    message: "Gabi is an incredible person, so young and already has a lot of knowledge about the area. I had the pleasure of working together on a Laboratória project, I am sure that her future will be bright. <3",
    avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQFbmY_wXdlyxQ/profile-displayphoto-shrink_200_200/0/1616708362406?e=1624492800&v=beta&t=ihpG0hTDUehnIUoYQGxiwLC92PNItwUkYiMR-MShskE"
  }
]

class Recommendations extends Component{
 render(){
   const settings = {
     dots: true,
     fade: true,
     infinite: false,
     speed: 500,
     slidesToShow: 1,
     arrows: true,
     slidesToScroll: 1,
     className: "slides",
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
   }
  return(
    <div className="recommendations">
      <h1 className="recommendations-tittle">Recommendations</h1>
      <p className="recommendations-text">People I've worked with have said some nice things...</p>
      <Slider {... settings}>
      {linkedIn.map((rec) =>{
        return(
          <div className="recommendation">
            <img src={rec.avatar} alt="Willian's LinkedIn user profile avatar"/>
            <p className="message"><strong>"</strong>{rec.message}<strong>"</strong></p>
            <p className="user-name"><strong>{rec.name}</strong></p>
            <p className="user-role">{rec.role}</p>
          </div>
        )
      })}
      </Slider>
    </div>
  )
 }
}
  


export default Recommendations;