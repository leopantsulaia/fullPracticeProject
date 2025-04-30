import React from "react";

// id
// label
// type
// placeholder
// message
function FormInput(props) {
  return (
    <div className="max-w-sm p-8">
      <label
        htmlFor={props.id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.label}
      </label>
      <div className="mt-2">
        <input
          id={props.id}
          name={props.id}
          type={props.type}
          placeholder={props.placeholder}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
        />
      </div>
      <p className="mt-2 text-sm text-gray-500">
        {props.message || "No message"}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <form>
      <FormInput
        id="email"
        type="email"
        label="Email"
        placeholder="you@example.com"
        message="We'll only use this for spam."
      />
      <FormInput
        id="password"
        type="password"
        label="Password"
        placeholder="Your password"
      />
    </form>
  );
}
