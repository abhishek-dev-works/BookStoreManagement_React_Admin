import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@mui/material";

const BookForm = ({ onSubmit }: { onSubmit: any }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: "",
      Author: "",
      Genre: "",
      Publication: "",
      PublishedYear: new Date().getFullYear(),
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "grid", gap: "1rem" }}
    >
      {/* Book Name */}
      <Controller
        name="Name"
        control={control}
        rules={{ required: "Book name is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Book Name"
            error={!!errors.Name}
            helperText={errors.Name?.message}
            fullWidth
          />
        )}
      />

      {/* Author */}
      <Controller
        name="Author"
        control={control}
        rules={{ required: "Author is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Author"
            error={!!errors.Author}
            helperText={errors.Author?.message}
            fullWidth
          />
        )}
      />

      {/* Genre */}
      <Controller
        name="Genre"
        control={control}
        rules={{ required: "Genre is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Genre"
            error={!!errors.Genre}
            helperText={errors.Genre?.message}
            fullWidth
          />
        )}
      />

      {/* Publication */}
      <Controller
        name="Publication"
        control={control}
        render={({ field }) => (
          <TextField {...field} label="Publication" fullWidth />
        )}
      />

      {/* Published Year */}
      <Controller
        name="PublishedYear"
        control={control}
        rules={{
          required: "Published year is required",
          min: { value: 1000, message: "Enter a valid year" },
          max: { value: new Date().getFullYear(), message: "Year can't be in the future" },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Published Year"
            type="number"
            error={!!errors.PublishedYear}
            helperText={errors.PublishedYear?.message}
            fullWidth
          />
        )}
      />

      <Button type="submit" variant="contained" color="primary">
        Add Book
      </Button>
    </form>
  );
};

export default BookForm;
