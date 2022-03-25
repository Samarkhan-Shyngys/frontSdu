import React from "react";
import Header from './Header';
import TopCourse from './TopCourse';
import Footer from "./Footer";
import CourseCard from "./CourseCard";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { ChevronLeftIcon, ChevronRightIcon , FilterIcon} from "@heroicons/react/outline";


const Assistant = () => {
   const [age, setAge] = React.useState('');
   const handleChange = (event) => {
    setAge(event.target.value);
  };
    return (
        <>
        <div className="">
            <Header />
            <div className=" pt-16 bg-gray-200">
                <div className="text-center ">
                    <h1 className="text-lg md:text-3xl font-semibold">Улучшение знания начинается здесь с ассистентами СДУ</h1>
                    <p className="text-xl font-normal mt-2">Мы вам предлагаем самых профессиональных ассистентов для хорошей успеваемости</p>
                </div>
                <div className="flex space-y-2 md:space-y-0 flex-col md:flex-row justify-center my-2 md:my-8 pb-24">
                  {/* <div className="rounded-md border-r-4 bg-white w-full md:w-1/3">
                    <p className="hidden md:block text-gray-200 ml-4">Название курса</p>
                    <input type='text'className=" block w-48 md:w-96 h-8 md:h-12  text-gray-700 px-4 leading-tight focus:outline-none  focus:border-gray-500"  placeholder="Doe"  onChange={handleChange}/>
                  </div> */}
                  <div>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 460, bgcolor: "white" ,}}
                    renderInput={(params) => <TextField {...params} label="Название курса" />}
                  />
                  </div>
                
                    {/* <p className="hidden md:block text-gray-200 ml-4">Формат урока</p>
                    <select className="block w-full h-8 md:h-12 px-2 rounded-md" placeholder="Выберите формат">
                          <option value="online"></option>
                          <option value="online">Online</option>
                          <option value="offline">Offline</option>
                    </select> */}
                    <div>
                    <FormControl sx={{minWidth: 200, minHeight: 50, bgcolor:"white" }}>
                      <InputLabel id="demo-simple-select-label">Формат урока</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Формат урока"
                        onChange={handleChange}
                      
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        
                      </Select>
                    </FormControl>
                    </div>
                  <div>
                    <button className=" w-full md:w-36 bg-gray-500 text-xl px-12 py-2 md:py-3 font-semibold rounded md:ml-8">Найти</button>
                  </div>
                  </div>
            </div>
            
        </div>
        <div className="max-w-7xl mx-auto pt-12">
            <div className="flex justify-between">
              <h1 className="text-lg font-medium tracking-tight text-gray-400">Найдено 12 результатов</h1>
              <div className="inline-flex items-center space-x-1">
                  <FilterIcon className="w-4 h-4"/>
                  <h1 className="text-lg tracking-tight font-medium">Сортировать по: Популярности</h1>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8"> 
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </div>

        <div className="max-w-7xl mx-auto ">
          <div className="flex items-center space-x-4 justify-end mt-4">
            <ChevronLeftIcon className="h-4 w-4"/>
            <a className="border-b border-black items-baseline">1</a>
            <a>2</a>
            <a>3</a>
            <a>...</a>
            <a>18</a>
            <ChevronRightIcon className="h-4 w-4" />
          </div>
        </div>
        
        <Footer />
        </>
    );
}


export default Assistant;

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 }
]