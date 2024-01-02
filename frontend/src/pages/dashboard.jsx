import React from 'react';
import { useForm } from "react-hook-form"


export default function Dashboard() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data)

  console.log(watch("example"))

  return (
    <main>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">Title</label>
            <input id='title' placeholder='this is a title' {...register("title", {required: true})} />
            {errors.title && <span>This field is required</span>}

            <label htmlFor="feature">Feature</label>
            <input id='feature' {...register("feature", { required: true })} />
            {errors.feature && <span>This field is required</span>}

            <label htmlFor="feature">Tag</label>
            <input id='feature' {...register("tag", { required: true })} />
            {errors.tag && <span>This field is required</span>}

            <button type="submit">
              submit
            </button>
          </form>
 
    </main>
  )
}
