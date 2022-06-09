import { Title } from "./Title";
import Empty from "../Empty";
import CourseCard from "../CourseCard";
import image from "../../image/book4.png";
import user_image from "../../image/circle.png";
const courses = [
    {
        id: "1",
        image: image,
        title: "Алгоритмы, структуры да...",
        user_image: user_image,
        rating: 2,
        total_rating: 200,
        students: 24,
        liked: false
    }
]
const Favourite=()=>{
    const data = true;
    return(
        <>
        <div className="w-full">
            <Title text="Избранное"/>
            {data ? <div className="grid grid-cols-3">
                {courses.map((course)=>(
                    <CourseCard key={course.id} data={course} />
                ))}

            </div> : <Empty 
                title="У вас пока нет Избранных" 
                subtitle="Добавьте интересующие Вас курсы/ассистенты в список избранных, чтобы их легче было найти  "/>
            }
           
        </div>
    
        
        </>
        
    );
}


export default Favourite;