const datas = [
  {
    duration: "2018 (ноябрь)- 2022 (декабрь)",
    work: "UX/UI Designer",
    about: "Дизайн студио Восточной Флориды - Мельбурн, Флорида"
  },
  {
    duration: "2018 (ноябрь)- 2022 (декабрь)",
    work: "UX/UI Designer",
    about: "Образовательная ассоциация Netherhall -Хэмпстед, Лондон, Великобритания"
  },
  {
    duration: "2018 (ноябрь)- 2022 (декабрь)",
    work: "UX/UI Designer",
    about: "Образовательная ассоциация Netherhall -Хэмпстед, Лондон, Великобритания"
  },
]

export function Experience() {
  return (
    <div className="mt-6 mb-24">
      <h1 className="text-xl font-semibold text-text_main mb-2">Опыт работы</h1>
      <ul className="list-disc space-y-2 font-normal text-base mx-4">
        {datas && datas.map((data)=>(
           <li key={data.about}>
           <div className="grid grid-cols-[120px,1fr] gap-10">
             <div>
               <h1 className="text-text_gray">{data.duration}</h1>
             </div>
             <div className="flex flex-col">
               <span className="text-text_main font-medium">{data.work}</span>
               <span className="text-text_gray">{data.about}</span>
             </div>
           </div>
         </li>

        ))}
        
        
      </ul>
    </div>
  );
}
