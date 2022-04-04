import { Title } from "./Title";
import Empty from "../Empty";
export function MyBooks(){
    return (
        <div className="w-2/3">
            <Title text="Мои книги"/>
            <Empty
                title="У вас пока нет сохраненных Книг" 
                subtitle="Добавьте и скачивайте рекомендованные книги от ассистентов, это позволит вам узнать больше информаци  "
            />

        </div>

    );
}