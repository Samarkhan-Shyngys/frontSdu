import PhotoPicker from "../PhotoPicker";
import Input from "../Input";
import Button from "../AssistantProfile/Button"; 
const Profilee=()=>{
    return (
        <div className="w-1/2">
        <h1 className="text-2xl font-semibold">Профиль</h1>
        <div>
         <PhotoPicker />
  
          <Input text="Имя" type="text" placeholder="Введите ваше имя" />
          <Input text="Фамилия" type="text" placeholder="Введите вашу фамилию" />
          <Input
            text="SDU-почта"
            type="text"
            placeholder="220102456@stu.sdu.edu.kz"
          />
          <Input
            text="Факультет"
            type="text"
            placeholder="Инженерии и естественных наук"
          />
          <Input
            text="Специализация"
            type="text"
            placeholder="Информационная система"
          />
          <Input
            text="Номер телефона"
            type="text"
            placeholder="+7 (701) 123 45-67|"
          />
        
         
          <Button text="Сохранить изменения" />
        </div>
      </div>
    );


}


export default Profilee;    