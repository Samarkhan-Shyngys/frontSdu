import React from "react";
import Input from "../Input";
const Settings = () => {
  return (
    <div className="w-1/2 space-y-4">
      <div>
        <h1 className="text-2xl font-semibold text-black border-b">
          Настройки
        </h1>
      </div>
      <div>
        <Input text="Действующий пароль" type="password" />
        <Input text="Новый пароль" type="password" />
        <Input text="Повторите пароль" type="password" />
      </div>
      <div className="mt-8">
        <button className="w-full py-2 bg-white border rounded-md border-gray-800 font-medium text-xl">
          Сохранить изменения
        </button>
      </div>
    </div>
  );
};

export default Settings;
