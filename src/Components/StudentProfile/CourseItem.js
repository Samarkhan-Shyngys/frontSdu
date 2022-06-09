export default function CourseItem({ data }) {
  return (
    <div className="w-full h-16 flex space-x-4 justify-between pt-3">
      <div className="flex space-x-4 w-1/2">
        <img alt="profile" src={data.image} className="h-14 w-14 rounded-md" />
        <div className="flex flex-col">
          <p className="text-text_main font-medium text-lg">{data.title}</p>
          <div className="flex items-center space-x-2">
            <img
              alt="teacher profile"
              src={data.teacher_profile}
              className="w-6 h-6 rounded-full"
            />
            <p className="text-text_gray font-normal text-sm">
              {data.teacher_name}
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <div className="flex space-x-4">
          {data.times.map((time) => (
            <div key={time.hour} className="flex flex-col items-center space-x-0">
              <p className="text-text_gray font-semibold text-base">
                {time.day}
              </p>
              <p className="text-text_gray font-normal text-base">
                {time.hour}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
