import { Title } from "./Title";
import Empty from "../Empty";
const Favourite=()=>{
    return(
        <div className="w-2/3">
            <Title text="Избранное"/>
            <Empty 
                title="У вас пока нет Избранных" 
                subtitle="Добавьте интересующие Вас курсы/ассистенты в список избранных, чтобы их легче было найти  "/>
        </div>
        
    );
}


export default Favourite;