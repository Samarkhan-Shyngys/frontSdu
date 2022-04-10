import React from 'react';
import AddButton from '../AssistantProfile/AddButton';
const MyLibrary =()=>{
    return(
    <div>
      <div className="flex justify-between border-b items-center pb-4">
        <h1 className="text-2xl font-semibol">Моя библиотека</h1>
        <AddButton  link="/assistantt/addbook"/>
      </div>
    </div>
    )

}

export default MyLibrary;