import React, { useRef } from "react";
import image from "../image/img_course.png";
import Header from "../Components/Header";
import TopCourse from "../Components/TopCourse";
import Footer from "../Components/Footer";
import Rating from "@mui/material/Rating";
import { HeartIcon, UserCircleIcon , CubeIcon} from "@heroicons/react/outline";
import ApplyCourseTable from "../Components/ApplyCourseTable";
import BreadCrumbs from "../Components/BreadCrumbs";

const route = [
  {name: "Главная", route: "/" },
  {name: "Найти ассистента",route: "/"},
  {name: "Подробнее о курсе", route: "/"},
];

const data = {
  cover: image,
  title: "Алгоритмы, структуры да...",
  tutor: "Арман Болатов",
  rating: 3,
  total_rating: 200,
  format: "Онлайн",
  students: 35,
  courses: 3,
  about: "Этот курс направлен на подробное изучение разработку дизайна мобильных приложении без воды, но главное - немедленное применение его на практике. Это значит, что вы получите материал для работы и мы вместе будем создавать реальные проекты шаг за шагом. Вторая часть курса - это изучение самой популярной библиотеки на основе UX/UI - Figma со всеми необходимыми технологиями (в том числе и UI-kit)",
  about_tutor: "Привет! Меня зовут Арман Болатов. 20+ лет в дизайне. Вместе со своей командой проектирую сайты и мобильные приложения для «МТС», «ВТБ», «Сбера», «Госуслуг», «Азбуки вкуса», Simplewine, «Ашана», «Дом.рф», «Мираторга» и других крупнейших компаний. В моей копилке уже несколько организованных и записанных авторских онлайн курсов, люблю помогать людям и делиться с ними знаниями. Я фрилансер, очень люблю путешествовать, выступать на различных конференциях и передавать свой опыт другим.",
  education: [{date: "2018-2019", profession: "Информационные системы"}],
  experience: [
    {type: "Профессия UX-дизайнер", organization: "Skillbox"},
    {type: "Курс по интерактивному дизайну и анимации интерфейсов", organization: "Breezzly company (Job Shadowing)"},
    {type: "UX/UI дизайнер", organization: "Основы создания мобильных приложений и сайтов"},
    {type: "Экспертное мнение по визуалу необычных вещей", organization: "Culture life about design"}
  ],
  certificate : [
    {about: "Профессия UX-дизайнер", organization: "Skillbox"},
    {about: "Курс по интерактивному дизайну и анимации интерфейсов", organization: "Breezzly company (Job Shadowing)"},
    {about: "UX/UI дизайнер", organization: "Основы создания мобильных приложений и сайтов"},
  ]

}
const ApplyCourse = () => {
  const scrollRef = useRef(null)
  return (
    <>
      <Header />
      <BreadCrumbs routes={route} />
      <div className="grid  grid-cols-1 md:grid-cols-course max-w-7xl mx-auto gap-10">
        <div className="space-x-4 md:space-y-8">
          <div className="flex flex-row pt-12">
            <div className="relative pb-4 overflow-hidden aspect-[16/9]">
              <img className="aspect-[16/10] w-[256px] md:w-[356px] rounded-md" src={data.cover} alt="course" />
              <HeartIcon className="absolute right-5 top-5 h-5 w-auto text-white rounded-full" />
            </div>
            <div className="p-1 md:p-4 ml-6">
              <h2 className="mb-2 text-xl font-bold truncate text-text_main">{data.title}</h2>
              <p className="text-base font-medium text-[#383838]">{data.tutor}</p>

              <div className="pt-1 md:pt-3 flex items-center">
                <p className="text-text_grau mr-2 text-sm">{data.rating}</p>
                <Rating
                  name="size-small"
                  defaultValue={data.rating}
                  precision={0.5}
                  readOnly
                />
                <span className="ml-2 text-text_gray text-sm">({data.total_rating})</span>
              </div>
              <p className="mt-2 text-base font-medium text-text_gray">{data.format}</p>
              <div className="flex items-center mt-2 space-x-1">
                <UserCircleIcon className="h-8 w-auto" />
                <span className="text-sm font-medium text-text_gray">{data.students} студентов</span>
              </div>
              <div className="flex items-center mt-2 space-x-1">
                <CubeIcon className="h-8 w-auto" />
                <span className="text-sm font-medium text-text_gray">{data.courses} курсов</span>
              </div>
            </div>
          </div>
          <div className="mt-2 md:mt-6 px-4 md:px-0">
            <h1 className="text-xl font-semibold text-head">О курсе</h1>
            <p className="text-base leading-5 font-normal text-[#77838F]">{data.about} </p>
          </div>
          <div className="mt-2 md:mt-6 px-4 md:px-0">
            <h1 className="text-xl font-semibold text-head">О преподавателе</h1>
            <p className="text-base leading-5 font-normal text-[#77838F]">{data.about_tutor}</p>
          </div>
          <div className="px-4 md:px-0">
            <h1 className="text-xl font-semibold text-head">Образование</h1>
            <div className="list-disc">
              {data.education.map((item)=>(
                 <li ley={item.profession} className="space-x-6">
                 <span className="text-text_main text-base">{item.profession}</span>
               </li>

              ))}
            </div>
          </div>

          <div className="space-y-2 px-4 md:px-0">
            <h1 className="text-xl font-semibold text-head">Опыт работы</h1>
            <div className="list-disc space-y-3">
              {data.experience.map((item)=>(
                <li key={item.type}>
                <div className="inline-flex space-x-6">
                  <div className="flex flex-col">
                    <span className="text-text_main text-base font-normal">{item.type}</span>
                    <span  className="text-[#77838F] text-sm font-normal">{item.organization}</span>
                  </div>
                </div>
              </li>

              ))}
            </div>
          </div>
          <div className="space-y-2 px-4 md:px-0">
            <h1 className="text-xl font-semibold text-head">Сертификаты</h1>
            <div className="list-disc space-y-3">
            {data.certificate.map((item)=>(
                <li key={item.about}>
                <div className="inline-flex space-x-6">
                  <div className="flex flex-col">
                    <span className="text-text_main text-base font-normal">{item.about}</span>
                    <span  className="text-[#77838F] text-sm font-normal">{item.organization}</span>
                  </div>
                </div>
              </li>
              ))}
            </div>
          </div>
        </div>
        <div>
          <ApplyCourseTable />
        </div>
      </div>
      <TopCourse scrollRef={scrollRef}/>
      <Footer />
    </>
  );
};

export default ApplyCourse;
