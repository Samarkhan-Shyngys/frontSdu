import Header from "../Components/Header";
import BreadCrumbs from "../Components/BreadCrumbs";
import Seacrh from "../Components/Chat/Search";
import Container from "../Components/Container";
import SingleChat from "../Components/Chat/SingleChat";
const route = [
  { name: "Главная", route: "/" },
  { name: "Сообщение", route: "" },
];

export default function Chat() {
  return (
    <>
      <Header />
      <BreadCrumbs routes={route} />
      <Container>
        <div className="grid grid-cols-2">
          <div className="w-2/3 space-y-4 h-96 overflow-y-scroll scrollbar-hide">
            <Seacrh />
            <div className="flex justify-between my-2">
              <h1>Сообщения</h1>
              <h1>+ Новая группа</h1>
            </div>
            <SingleChat />
            <SingleChat />
            <SingleChat />
            <SingleChat />
            <SingleChat />
          </div>
          <div>aaaa</div>
        </div>
      </Container>
    </>
  );
}
