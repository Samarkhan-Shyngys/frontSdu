import image from "../../image/12.webp";
export function Personal() {
  return (
    <div className="mx-2">
      <div className="flex items-center space-x-3">
        <img alt="profile" src={image} className="w-16 h-16 rounded-full" />
        <div>
          <h1 className="text-base text-text_main font-medium">Арман Болатов</h1>
          <p className="text-sm text-text_gray font-normal">+7 (701) 123 45-67</p>
          <p className="text-sm text-text_gray font-normal">180103123@stu.sdu.edu.kz</p>
        </div>
      </div>
      <div className="mt-2">
        <p className="leading-5 text-sm">
          Привет! Меня зовут Арман Болатов. 20+ лет в дизайне. Вместе со своей
          командой проектирую сайты и мобильные приложения для «МТС», «ВТБ»,
          «Сбера», «Госуслуг», «Азбуки вкуса», Simplewine, «Ашана», «Дом.рф»,
          «Мираторга» и других крупнейших компаний. В моей копилке уже несколько
          организованных и записанных авторских онлайн курсов, люблю помогать
          людям и делиться с ними знаниями.
        </p>
      </div>
      <div className="">
        <h1 className="text-lg font-semibold text-text_main mb-1 mt-2">
          Образование
        </h1>
        <ul className="list-disc mx-4">
          <li>
            <div className="flex space-x-4">
              <p className="text-base text-text_gray font-normal">3 курс</p>
              <div>
                <p className="text-base text-text_main font-normal">Факультет инженерии и естественных наук</p>
                <p className="text-base text-text_gray font-normal">Информационная система</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-lg font-semibold text-text_main mt-2">Языки</h1>
        <ul className="list-disc text-base font-normal mx-4">
          <li>
            <div className="flex space-x-5">
              <p className="text-text_gray">С1</p>
              <p className=" text-text_main">Казахский</p>
            </div>
          </li>
          <li>
            <div className="flex space-x-5">
              <p className="text-text_gray">С1</p>
              <p className=" text-text_main">Русский</p>
            </div>
          </li>
          <li>
            <div className="flex space-x-4">
              <p className="text-text_gray">A1</p>
              <p className=" text-text_main">Турецкий</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
