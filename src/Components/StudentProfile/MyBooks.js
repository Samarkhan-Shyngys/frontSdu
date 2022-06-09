import { Title } from "./Title";
import Empty from "../Empty";
import Book from "../Book";
import image from "../../image/book1.png";
const books = [
  {
    id: "1",
    image: image,
    title: "Практика менеджмента",
    author: "Питер Друкер",
    liked: true
  },
];
export function MyBooks() {
  return (
    <div className="w-full">
      <Title text="Мои книги" />
      {books ? (
        <div className="grid grid-cols-3">
          {books.map((book) => (
            <Book key={book.id} data={book} />
          ))}
        </div>
      ) : (
        <Empty
          title="У вас пока нет сохраненных Книг"
          subtitle="Добавьте и скачивайте рекомендованные книги от ассистентов, это позволит вам узнать больше информаци  "
        />
      )}
    </div>
  );
}
