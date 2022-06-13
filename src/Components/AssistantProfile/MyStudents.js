import AddButton from "./AddButton";
import ListItem from "./ListItem";
import axios from "axios";
import {base_url} from "../../utils/request";
import React, {useState, useEffect} from 'react';
const datas = [
    {
        image: require("../../image/12.webp"),
        name: "Akhjol",
        desc: "Algorithm....",
        times : [
            {
                day: "Пн",
                hour: "10:30"
            },
            {
                day: "Ср",
                hour: "14:30"
            },
            {
                day: "Ср",
                hour: "14:30"
            }
        ]
    },
    {
        image: require("../../image/12.webp"),
        name: "Shyngys",
        desc: "Algorithm....",
        times : [
            {
                day: "Пн",
                hour: "10:30"
            },
            {
                day: "Ср",
                hour: "14:30"
            },
           
        ]
    }
]

const MyStudents = () => {
    
  const user = JSON.parse(localStorage.getItem("user"));
  let id = 0;
  if(user!==null){
    id= user.id
  }
  const [theArray, setTheArray] = useState([]);
  
  useEffect(()=>{
    axios.get( `${base_url}/api/assistant/get/students/${id}`)
    .then((result) => setTheArray(result.data.courses)
    )
    .catch(((er)=>console.log(er)))
  }, []);  
  console.log(theArray)
    return (
        <div>
        <div className="flex justify-between border-b items-center pb-4">
          <h1 className="text-lg md:text-2xl font-semibol">Мои студенты</h1>
        </div>
        <div className="pt-8">
            {theArray && theArray.map((data)=>(
                <ListItem image={data.pathImage} name={data.assistant} desc={data.courseName} times={data.dates}/>
            ))}
          
        </div>
      </div>
    );
  };
  
  export default MyStudents;
  