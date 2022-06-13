import {base_url} from "../../utils/request";
export default function CourseItem({ data }) {
  return (
    <div className="w-full h-16 flex space-x-4 justify-between pt-3">
      <div className="flex space-x-4 w-1/2">
        <img alt="profile" src={base_url + data.pathImage} className="h-14 w-14 rounded-md" />
        <div className="flex flex-col">
          <p className="text-text_main font-medium text-lg">{data.courseName}</p>
          <div className="flex items-center space-x-2">
            <img
              alt="teacher profile"
              src={base_url + data.assImage}
              className="w-6 h-6 rounded-full"
            />
            <p className="text-text_gray font-normal text-sm">
              {data.assistant}
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <div className="flex space-x-4">
          {data.dates.map((time) => (
            <div key={time.hourStr} className="flex flex-col items-center space-x-0">
              <p className="text-text_gray font-semibold text-base">
                {time.dayStr}
              </p>
              <p className="text-text_gray font-normal text-base">
                {time.hourStr}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
