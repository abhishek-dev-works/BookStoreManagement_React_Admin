import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@mui/material";

const UserForm = ({ onSubmit }: { onSubmit: any }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: "",
      Email: "",
      Phone: "",
      Password: "",
      Address: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "grid", gap: "1rem" }}
    >
      <Controller
        name="Name"
        control={control}
        rules={{ required: "Name is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Name"
            error={!!errors.Name}
            helperText={errors.Name?.message}
          />
        )}
      />

      <Controller
        name="Email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email format",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            error={!!errors.Email}
            helperText={errors.Email?.message}
          />
        )}
      />

      <Controller
        name="Phone"
        control={control}
        rules={{ required: "Phone number is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Phone"
            error={!!errors.Phone}
            helperText={errors.Phone?.message}
          />
        )}
      />

      <Controller
        name="Password"
        control={control}
        rules={{ required: "Password is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            type="password"
            error={!!errors.Password}
            helperText={errors.Password?.message}
          />
        )}
      />

      <Controller
        name="Address"
        control={control}
        render={({ field }) => (
          <TextField {...field} label="Address" multiline rows={2} />
        )}
      />

      <Button type="submit" variant="contained" color="primary">
        Create User
      </Button>
    </form>
  );
};

export default UserForm;
