import image from "../../image/12.webp";
const data = {
  name: "Арман Болатов",
  phone: "+7 (701) 123 45-67",
  email: "180103123@stu.sdu.edu.kz",
  about: "Привет! Меня зовут Арман Болатов. 20+ лет в дизайне. Вместе со своей командой проектирую сайты и мобильные приложения для «МТС», «ВТБ»,«Сбера», «Госуслуг», «Азбуки вкуса», Simplewine, «Ашана», «Дом.рф», «Мираторга» и других крупнейших компаний. В моей копилке уже несколько организованных и записанных авторских онлайн курсов, люблю помогать людям и делиться с ними знаниями.",
  education: {
    year: "3 курс", 
    faculty: "Факультет инженерии и естественных наук",
    profession: "Информационная система"
  },
  languages: [{language: "Казахский", level: "C1"}, {language: "Русский", level: "B1"}, {language: "Турецкий", level: "A1"}]
} 
export function Personal() {
  return (
    <div className="mx-2">
      <div className="flex items-center space-x-3">
        <img alt="profile" src={image} className="w-16 h-16 rounded-full" />
        <div>
          <h1 className="text-base text-text_main font-medium">{data.name}</h1>
          <p className="text-sm text-text_gray font-normal">{data.phone}</p>
          <p className="text-sm text-text_gray font-normal">{data.email}</p>
        </div>
      </div>
      <div className="mt-2">
        <p className="leading-5 text-sm">{data.about}</p>
      </div>
      <div className="">
        <h1 className="text-lg font-semibold text-text_main mb-1 mt-2">
          Образование
        </h1>
        <ul className="list-disc mx-4">
          <li>
            <div className="flex space-x-4">
              <p className="text-base text-text_gray font-normal">{data.education.year}</p>
              <div>
                <p className="text-base text-text_main font-normal">{data.education.faculty}</p>
                <p className="text-base text-text_gray font-normal">{data.education.profession}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-lg font-semibold text-text_main mt-2">Языки</h1>
        <ul className="list-disc text-base font-normal mx-4">
          {data.languages.map((item)=>(
            <li key={item.email}>
            <div className="flex space-x-5">
              <p className="text-text_gray">{item.level}</p>
              <p className=" text-text_main">{item.language}</p>
            </div>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
