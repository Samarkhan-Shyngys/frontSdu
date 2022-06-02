import AddButton from "./AddButton";
import ListItem from "./ListItem";
const datas = [
    {
        image: require("../../image/12.webp"),
        name: "Akhjol",
        desc: "Algorithm....",
        times : [
            {
                day: "Пн",
                hour: "10:30"
            },
            {
                day: "Ср",
                hour: "14:30"
            },
            {
                day: "Ср",
                hour: "14:30"
            }
        ]
    },
    {
        image: require("../../image/12.webp"),
        name: "Shyngys",
        desc: "Algorithm....",
        times : [
            {
                day: "Пн",
                hour: "10:30"
            },
            {
                day: "Ср",
                hour: "14:30"
            },
            {
                day: "Ср",
                hour: "14:30"
            }
        ]
    }
]
const MyStudents = () => {
    return (
        <div>
        <div className="flex justify-between border-b items-center pb-4">
          <h1 className="text-lg md:text-2xl font-semibol">Мои студенты</h1>
          <AddButton link="/assistantt/addcourse"/>
        </div>
        <div className="pt-8">
            {datas.map((data)=>(
                <ListItem image={data.image} name={data.name} desc={data.desc} times={data.times}/>
            ))}
          
        </div>
      </div>
    );
  };
  
  export default MyStudents;
  