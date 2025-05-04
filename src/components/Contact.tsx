import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  name: z
    .string()
    .min(5, "Name must be at least 5 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z
    .string()
    .email("Invalid email format")
    .min(5, "Email must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const [result, setResult] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setResult("Sending...");

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("access_key", "214a594d-9ad5-44eb-9604-5d9124f665ee");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const responseData = await response.json();

    if (responseData.success) {
      setResult("Form Submitted Successfully!");
      reset();
    } else {
      console.log("Error", responseData);
      setResult(responseData.message);
    }
  };

  return (
    <section
      id="contact"
      className="py-12 mt-15 flex justify-center items-center"
    >
      <div className="max-w-lg bg-white rounded-lg p-8 mx-4 sm:mx-10 w-full">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Send me a message
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:border-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:border-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-1"
            >
              Message
            </label>
            <textarea
              {...register("message")}
              id="message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:border-2"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full text-center hover:cursor-pointer gap-2 px-5 pb-2 pt-3 border border-primary text-primary
            rounded-full hover:bg-secondary hover:border-secondary hover:text-white transition-colors duration-300"
          >
            Submit
          </button>
        </form>

        {result && <p className="text-center text-green-600 mt-4">{result}</p>}
      </div>
    </section>
  );
};

export default Contact;
