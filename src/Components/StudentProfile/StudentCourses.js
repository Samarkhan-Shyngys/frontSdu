import { Title } from "./Title";
import Empty from "../Empty";
import image from "../../image/img_course.png";
import user_image from "../../image/circle.png";
import CourseItem from "../../Components/StudentProfile/CourseItem";
const courses =[
    {
        id: "1",
        image: image,
        title: "Алгоритмы, структуры да...",
        teacher_name: "Арман Болатов",
        teacher_profile: user_image,
        times: [{day: "Mon", hour: "10:30"}, {day: "Tue", hour: "12:30"}]
      },
]
const StudentCourses=()=>{
    return (
        <div className="w-full">
            <Title text="Мои курсы"/>
            {courses ? courses.map((course)=>(
                <CourseItem key={course.id} data={course}/>
            )):  
            <Empty 
                title="У вас пока нет курсов" 
                subtitle="Вы еще не записаны ни к одному курсу от ассистентов. Найдите подходящего и подтягивайте знание"
            />}
           
        </div>
        

    );
}

export default StudentCourses;