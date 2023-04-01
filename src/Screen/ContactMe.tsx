import React from "react";

function ContactMe() {
  return (
    <div className="p-5">
      <p className="">Dont Be Shy</p>
      <div className="mt-3 grid gap-5">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Email Address"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Message"
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </div>
    </div>
  );
}

export default ContactMe;
