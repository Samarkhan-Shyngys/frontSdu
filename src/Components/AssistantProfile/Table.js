import Cell from "./Cell";
export default function Table({data, fields, append, remove}){
    const alltime = []
    if(data){

        data.forEach(element=>alltime.push(element.time))
    }

    return (
        <div className="grid grid-cols-8 border gap-0 mt-6">
            <button className="border h-12 cursor-pointer text-base font-semibold bg-gray-300">Время/Дни недели</button>
            <button className="border h-12 cursor-pointer text-base font-semibold bg-gray-300">Пн</button>
            <button className="border h-12 cursor-pointer text-base font-semibold bg-gray-300">Вт</button>
            <button className="border h-12 cursor-pointer text-base font-semibold bg-gray-300">Ср</button>
            <button className="border h-12 cursor-pointer text-base font-semibold bg-gray-300">Чт</button>
            <button className="border h-12 cursor-pointer text-base font-semibold bg-gray-300">Пт</button>
            <button className="border h-12 cursor-pointer text-base font-semibold bg-gray-300">Сб</button>
            <button disabled className="border h-12 cursor-pointer text-base font-semibold bg-gray-300">Вс</button>
            <button disabled className="border h-12 cursor-pointer text-base font-semibold bg-white">09:00 - 10:00</button>
            <Cell text="" value="Monday-9" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Tuesday-9" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Wednesday-9" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Thursday-9" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Friday-9" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Saturday-9" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Sunday-9" data={alltime} fields={fields} append={append} remove={remove}/>
            <button disabled className="border h-12 cursor-pointer text-base font-semibold bg-white">10:00 - 11:00</button>
            <Cell text="" value="Monday-10" data={alltime}a={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Tuesday-10" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Wednesday-10" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Thursday-10" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Friday-10" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Saturday-10" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Sunday-10" data={alltime} fields={fields} append={append} remove={remove}/>
            <button disabled className="border h-12 cursor-pointer text-base font-semibold bg-white">11:00 - 12:00</button>
            <Cell text="" value="Monday-11" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Tuesday-11" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Wednesday-11" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Thursday-11" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Friday-11" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Saturday-11" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Sunday-11" data={alltime} fields={fields} append={append} remove={remove}/>
            <button disabled className="border h-12 cursor-pointer text-base font-semibold bg-white">12:00 - 13:00</button>
            <Cell text="" value="Monday-12" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Tuesday-12" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Wednesday-12" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Thursday-12" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Friday-12" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Saturday-12" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Sunday-12" data={alltime} fields={fields} append={append} remove={remove}/>
            <button disabled className="border h-12 cursor-pointer text-base font-semibold bg-white">13:00 - 14:00</button>
            <Cell text="" value="Monday-13" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Tuesday-13" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Wednesday-13" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Thursday-13" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Friday-13" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Saturday-13" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Sunday-13" data={alltime} fields={fields} append={append} remove={remove}/>
            <button disabled className="border h-12 cursor-pointer text-base font-semibold bg-white">14:00 - 15:00</button>
            <Cell text="" value="Monday-14" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Tuesday-14" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Wednesday-14" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Thursday-14" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Friday-14" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Saturday-14" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Sunday-14" data={alltime} fields={fields} append={append} remove={remove}/>
            <button disabled className="border h-12 cursor-pointer text-base font-semibold bg-white">15:00 - 16:00</button>
            <Cell text="" value="Monday-15" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Tuesday-15" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Wednesday-15" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Thursday-15" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Friday-15" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Saturday-15" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Sunday-15" data={alltime} fields={fields} append={append} remove={remove}/>
            <button disabled className="border h-12 cursor-pointer text-base font-semibold bg-white">16:00 - 17:00</button>
            <Cell text="" value="Monday-16" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Tuesday-16" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Wednesday-16" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Thursday-16" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text="" value="Friday-16" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Saturday-16" data={alltime} fields={fields} append={append} remove={remove}/>
            <Cell text=""  value="Sunday-16" data={alltime} fields={fields} append={append} remove={remove}/>
        </div>  
    );
}