import React,{ useState, useEffect } from "react";
import image from "../image/img_course.png";
import Header from "../Components/Header";
import TopCourse from "../Components/TopCourse";
import Footer from "../Components/Footer";
import Rating from "@mui/material/Rating";
import { HeartIcon, UserCircleIcon , CubeIcon} from "@heroicons/react/outline";
import ApplyCourseTable from "../Components/ApplyCourseTable";
import BreadCrumbs from "../Components/BreadCrumbs";
import axios from "axios";
import {base_url} from "../utils/request";
import {Route, Link, Routes, useParams} from 'react-router-dom';
const route = [
  {name: "Главная", route: "/" },
  {name: "Найти ассистента",route: "/allcourses"},
  {name: "Подробнее о курсе", route: "/"},
];
const ApplyCourse = () => {
  const params = useParams();
  const courseId = params.id;
  

  console.log("id+ " + courseId)
  const [theArray, setTheArray] = useState([]);
  const [theCertificate, setTheCertificate] = useState([]);
  const [theCourse, setTheCourse] = useState({
    imagePath: "null",
    courseName: "",
    assistantName: "",
    rating: "",
    point: "",
    studentCount: "",
    courseCount: "",
    aboutCourse: "",
    aboutAssistant: "",
    phone: "",
    languages: [{ name: "rus", level: "A1" }],
  });
  useEffect(async () => {
    if (courseId !== "") {
      const result = await axios(base_url+
        '/api/main/get/course/'+courseId
      );
      const course = JSON.parse(JSON.stringify(result.data));
      console.log(course);
      setTheArray( course.workList)
      setTheCertificate(course.certificateList)
      setTheCourse({
        ...theCourse,
        ["imagePath"]: course.imagePath,
        ["courseName"]: course.courseName,
        ["assistantName"]: course.assistantName,
        ["rating"]: course.rating,
        ["point"]: course.point,
        ["courseCount"]: course.courseCount,
        ["aboutCourse"]: course.aboutCourse,
        ["aboutAssistant"]: course.aboutAssistant,
        ["courseFormat"]: course.courseFormat,
        ["studentCount"]: course.studentCount,
        
        
        
      });
    }
    
    
  }, []);
  console.log('course ' +theArray)
  return (
    <>
      <Header />
      <BreadCrumbs routes={route} />
      <div className="grid  grid-cols-1 md:grid-cols-course max-w-7xl mx-auto gap-10">
        <div className="space-x-4 md:space-y-8">
          <div className="flex flex-row pt-12">
            <div className="relative pb-4 overflow-hidden aspect-[16/9]">
              <img className="aspect-[16/10] w-[256px] md:w-[356px] rounded-md" src={base_url + theCourse.imagePath} alt="course" />
              <HeartIcon className="absolute right-5 top-5 h-5 w-auto text-white rounded-full" />
            </div>
            <div className="p-1 md:p-4 ml-6">
              <h2 className=" mb-2 text-base md:text-lg font-bold truncate">{theCourse.courseName}</h2>
              <p className="text-sm md:text-base font-medium">{theCourse.assistantName}</p>

              <div className="pt-1 md:pt-3 flex items-center">
                <p className="text-yellow-500 mr-2 text-sm">{theCourse.rating}</p>
                <Rating
                  name="size-small"
                  defaultValue={3}
                  precision={0.5}
                  readOnly
                />
                <span className="ml-2 text-gray-600 text-sm">({theCourse.point})</span>
              </div>
              <p className="mt-2 text-base font-medium">{theCourse.courseFormat}</p>
              <div className="flex items-center mt-2 space-x-1">
                <UserCircleIcon className="h-8 w-auto" />
                <span className="text-sm font-medium"> {theCourse.studentCount} студентов</span>
              </div>
              <div className="flex items-center mt-2 space-x-1">
                <CubeIcon className="h-8 w-auto" />
                <span className="text-sm font-medium">{theCourse.courseCount} курсов</span>
              </div>
            </div>
          </div>
          <div className="mt-2 md:mt-6 px-4 md:px-0">
            <h1 className="text-xl font-semibold">О курсе</h1>
            <p className="text-base leading-5 font-normal">
              {theCourse.aboutCourse}
            </p>
          </div>
          <div className="mt-2 md:mt-6 px-4 md:px-0">
            <h1 className="text-xl font-semibold">О преподавателе</h1>
            <p className="text-base leading-5 font-normal">
              {theCourse.aboutAssistant}
            </p>
          </div>
          {/* <div className="px-4 md:px-0">
            <h1 className="text-xl font-semibold">Образование</h1>
            <div className="list-disc">
              <li>
                <span className="text-gray-500">2018-2019</span> Информационные
                системы
              </li>
            </div>
          </div> */}

          <div className="space-y-2 px-4 md:px-0">
            <h1 className="text-xl font-semibold">Опыт работы</h1>
            {theArray.map((data)=>(
            <div className="list-disc">
              <li>
                <div className="inline-flex space-x-6">
                  <span className="text-gray-500">{data.startWorkYear} { data.endDate ? " ": "- " + data.endWorkYear} </span>
                  <div className="flex flex-col">
                    <span>{data.position}</span>
                    <span  className="text-gray-500">
                     {data.organisation}
                    </span>
                  </div>
                </div>
              </li>
            </div>
            ))}
            {/* <div className="list-disc">
              <li>
                <div className="inline-flex space-x-6">
                  <span className="text-gray-500">2019-2020</span>
                  <div className="flex flex-col">
                    <span>Курс по интерактивному дизайну и анимации интерфейсов</span>
                    <span  className="text-gray-500">
                    Breezzly company (Job Shadowing)
                    </span>
                  </div>
                </div>
              </li>
            </div>
            <div className="list-disc">
              <li>
                <div className="inline-flex space-x-6">
                  <span className="text-gray-500">2020-2021</span>
                  <div className="flex flex-col">
                    <span>UX/UI дизайнер</span>
                    <span  className="text-gray-500">Дизайн студио Dala Development / Фриланс</span>
                  </div>
                </div>
              </li>
            </div> */}
          </div>
          <div className="space-y-2 px-4 md:px-0">
            <h1 className="text-xl font-semibold">Сертификаты</h1>
            {theCertificate.map((certificate)=>(
            <div className="list-disc">
              <li>
                <div className="inline-flex space-x-6">
                  {/* <span className="text-gray-500">2018-2019 </span> */}
                  <div className="flex flex-col">
                    <span>{certificate.cerName}</span>
                    <span  className="text-gray-500">{certificate.cerDec}</span>
                  </div>
                </div>
              </li>
            </div>))}
            {/* <div className="list-disc">
              <li>
                <div className="md:inline-flex space-x-6">
                  <span className="text-gray-500">2019-2020</span>
                  <div className="flex flex-col">
                    <span className="">Курс по интерактивному дизайну и анимации интерфейсов</span>
                    <span  className="text-gray-500">Breezzly company (Job Shadowing)</span>
                  </div>
                </div>
              </li>
            </div>
            <div className="list-disc">
              <li>
                <div className="inline-flex space-x-6">
                  <span className="text-gray-500">2020-2021</span>
                  <div className="flex flex-col">
                    <span>UX/UI дизайнер</span>
                    <span  className="text-gray-500">Основы создания мобильных приложений и сайтов</span>
                  </div>
                </div>
              </li>
            </div>
            <div className="list-disc">
              <li>
                <div className="inline-flex space-x-6">
                  <span className="text-gray-500">2021-2022</span>
                  <div className="flex flex-col">
                    <span>Экспертное мнение по визуалу необычных вещей</span>
                    <span  className="text-gray-500">Culture life about design</span>
                  </div>
                </div>
              </li>
            </div> */}
          </div>
        </div>
        <div>
          <ApplyCourseTable />
        </div>
      </div>
      <TopCourse />
      <Footer />
    </>
  );
};

export default ApplyCourse;
