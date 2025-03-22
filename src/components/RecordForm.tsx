import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Autocomplete } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const statuses = ["Borrowed", "Returned", "Overdue"];

const RecordForm = ({
  initialValues,
  onSubmit,
  users,
  books,
}: {
  initialValues: any;
  onSubmit: any;
  users: any;
  books: any;
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues || {
      UserId: null,
      BookId: null,
      IssueDate: null,
      DueDate: null,
      Status: "Borrowed",
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "grid", gap: "1rem" }}
      >
        {/* User Selection */}
        <Controller
          name="UserId"
          control={control}
          rules={{ required: "User is required" }}
          render={({ field }) => (
            <Autocomplete
              {...field}
              options={users || []}
              getOptionLabel={(option) => option.name || ""}
              onChange={(_, value) => field.onChange(value?.id || null)}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  label="User"
                  error={!!errors.UserId}
                  helperText={errors.UserId?.message}
                />
              )}
            />
          )}
        />

        {/* Book Selection */}
        <Controller
          name="BookId"
          control={control}
          rules={{ required: "Book is required" }}
          render={({ field }) => (
            <Autocomplete
              {...field}
              options={books || []}
              getOptionLabel={(option) => option.title || ""}
              onChange={(_, value) => field.onChange(value?.id || null)}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  label="Book"
                  error={!!errors.BookId}
                  helperText={errors.BookId?.message}
                />
              )}
            />
          )}
        />

        {/* Issue Date */}
        <Controller
          name="IssueDate"
          control={control}
          rules={{ required: "Issue date is required" }}
          render={({ field }) => (
            <DatePicker
              {...field}
              label="Issue Date"
              slotProps={{ textField: { variant: "outlined", fullWidth: true } }}
              onChange={(date) => field.onChange(date)}
            />
          )}
        />

        {/* Due Date */}
        <Controller
          name="DueDate"
          control={control}
          rules={{ required: "Due date is required" }}
          render={({ field }) => (
            <DatePicker
              {...field}
              label="Due Date"
              slotProps={{ textField: { variant: "outlined", fullWidth: true } }}
              onChange={(date) => field.onChange(date)}
            />
          )}
        />

        {/* Status Selection */}
        <Controller
          name="Status"
          control={control}
          rules={{ required: "Status is required" }}
          render={({ field }) => (
            <Autocomplete
              {...field}
              options={statuses}
              onChange={(_, value) => field.onChange(value)}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  label="Status"
                  error={!!errors.Status}
                  helperText={errors.Status?.message}
                />
              )}
            />
          )}
        />

        <Button type="submit" variant="contained" color="primary">
          {initialValues ? "Update Record" : "Add Record"}
        </Button>
      </form>
    </LocalizationProvider>
  );
};

export default RecordForm;
