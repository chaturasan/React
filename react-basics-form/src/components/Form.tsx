import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// const Form = () => {
//   const nameRef = useRef<HTMLInputElement>(null);
//   const ageRef = useRef<HTMLInputElement>(null);
//   const person = { name: "", age: 0 };

//   const [person, setPerson] = useState({ name: "", age: "" });

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     console.log("Submitted!");
//     // if (nameRef.current !== null) person.name = nameRef.current.value;
//     // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
//     console.log(person);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="name" className="label">
//           Name
//         </label>
//         <input
//           onChange={(event) =>
//             setPerson({ ...person, name: event.target.value })
//           }
//           id="name"
//           type="text"
//           value={person.name}
//           className="form-control"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="label">
//           Age
//         </label>
//         <input
//           onChange={(event) =>
//             setPerson({ ...person, age: parseInt(event.target.value) })
//           }
//           id="age"
//           type="number"
//           value={person.age}
//           className="form-control"
//         />
//       </div>
//       <button className="btn btn-primary">Submit</button>
//     </form>
//   );
//   );

// interface FormData {
//   name: string;
//   age: number;
// }

const schema = z.object({
  name: z.string().min(3, { message: "Name must be atleast 3 characters" }),
  age: z
    .number({ invalid_type_error: "Age is required" })
    .min(18, { message: "Age must be greater than 18" }),
});

// infering ts type from schema obj, this is equivalent to interface in TS
type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
