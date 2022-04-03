import { Title } from "./Title";
import Empty from "../Empty";
const StudentCourses=()=>{
    return (
        <div className="w-2/3">
            <Title text="Мои курсы"/>
            <Empty 
                title="У вас пока нет курсов" 
                subtitle="Вы еще не записаны ни к одному курсу от ассистентов. Найдите подходящего и подтягивайте знание"
            />
        </div>
        

    );
}

export default StudentCourses;