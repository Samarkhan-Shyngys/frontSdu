export function Buttons() {
  return (
    <div className="space-y-2 mt-4 justify-self-end">
      <button
        className="w-full h-10 px-6 font-semibold rounded-md bg-text_main text-white"
        type="submit"
      >
        Принять
      </button>
      <button
        className=" w-full h-10 px-6 font-semibold rounded-md bg-white text-text_gray"
        type="submit"
      >
        Отменить
      </button>
    </div>
  );
}
