import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useForm, Controller , useFieldArray} from "react-hook-form";
import { Modal, Autocomplete, TextField, Typography } from "@mui/material";
import { PlusIcon, CheckIcon } from "@heroicons/react/outline";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ showModal, handleClose }) {
  const [preview, setPreview] = useState(require("../../image/12.webp"));
  const { control, handleSubmit,setValue} = useForm({
    initialValues : {
        image: "",
        groupName: "",
        members: [],
      },
  });
  
  const { fields, append} = useFieldArray({
    control,
    name: "members",
  });

  const handleImage = (e) => {
    if (window.FileReader) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        setValue("image", e.target.result)
        setPreview(e.target.result);
      };
    }
  };
  const handleClick =()=>{
      handleClose();
  }
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography  variant="h6" component="h2">
            Добавить новая группа
          </Typography>
          <Controller
              name="members"
              control={control}
              render={({ field }) => (

          <Autocomplete
            multiple
            options={top100Films}
            onChange={(event, newValue) => {append({newValue}) }}
            getOptionLabel={(option) => option.title}
            filterSelectedOptions
            sx={{ mt: 2 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Введите имя студента или название курса"
                placeholder="Введите имя студента или название курса"
               
              />
            )}
          />
          )}
            />
         
          <Box sx={{mt: 2,ml:12}}>
            <label>
              <img
                src={ preview}
                className="relative w-48 h-48 rounded-full"
                alt="profile"
              />
              <PlusIcon className="absolute z-10 h-6 w-6 ml-40 -mt-12 bg-gray-900 rounded-full text-white" />
              <input
                name="image"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImage}
              />
            </label>
          </Box>
          <Controller
              name="groupName"
              control={control}
              render={({ field }) => (
                <TextField {...field}  sx={{ mt: 2 }} fullWidth  variant="outlined" label="Название группы" />
              )}
            />
          
          <div className="flex justify-center mt-8">
              <button  type="submit">
                  <CheckIcon className="h-10 w-10 bg-white rounded-full shadow-lg p-2" onClick={handleClose}/>
              </button>
          </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
];
