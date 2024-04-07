import React from "react";

const Form = () => {
  return (
    <>
      <div className="container w-[735px] bg-slate-200 p-10 grid gap-3">
        <h2 className="text-2xl uppercase font-semibold">Insert Information</h2>
        <div className="grid grid-cols-2 gap-2">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">Shop name</span>
            </div>
            <input
              type="text"
              placeholder="Shop name here"
              className="input font-medium rounded-sm input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">Full name</span>
            </div>
            <input
              type="text"
              placeholder="Full name here"
              className="input font-medium rounded-sm input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">Address</span>
            </div>
            <input
              type="text"
              placeholder="Address here"
              className="input font-medium rounded-sm input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">Phone </span>
            </div>
            <input
              type="text"
              placeholder="Contact number here"
              className="input font-medium rounded-sm input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">National ID no.</span>
            </div>
            <input
              type="text"
              placeholder="NID number here"
              className="input font-medium rounded-sm input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">Customer ID</span>
            </div>
            <input
              type="text"
              placeholder="Customer ID here"
              className="input font-medium rounded-sm input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">Pick a file</span>
            </div>
            <input
              type="file"
              className="file-input rounded-sm font-medium file-input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text font-semibold">Important text</span>
              {/* <span className="label-text-alt">Alt label</span> */}
            </div>
            <textarea
              className="textarea textarea-bordered h-12 rounded-sm"
              placeholder="Important Links ://"
            ></textarea>
          </label>
        </div>
        <div className="flex justify-center mt-5">
          <button className="btn btn-wide btn-primary rounded-sm">Save</button>
        </div>
      </div>
    </>
  );
};

export default Form;
