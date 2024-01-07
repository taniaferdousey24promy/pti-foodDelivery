import { useState } from "react";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  // hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [newData, setNewData] = useState([]);
  const onSubmit = (data) => {
    //console.log(data)
    setNewData((prevData) => [...prevData, data]);
  };

  
  console.log(newData);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {/* id field */}
        <div className="input-group flex-nowrap mb-2 ">
          <span className="input-group-text" id="addon-wrapping">
            {/* 1. Food Name */}
            Food Id
          </span>
          <input
            type="text"
            placeholder="Type the food id here"
            className="form-control "
            name="foodId"
            {...register("foodId", { required: "Food Id is required" })}
            // error part ------------------
            aria-invalid={errors.foodId ? "true" : "false"}
          />

          {/* error part finishes ---------------*/}
        </div>
        <div>
          {errors.foodId?.type === "required" && (
            <span className="ms-2 text-danger" role="alert">
              {errors.foodId.message}
            </span>
          )}
        </div>
        {/* 2. name field */}
        <div className="input-group flex-nowrap mb-2 mt-3">
          <span className="input-group-text" id="addon-wrapping">
            Food Name
          </span>
          <input
            type="text"
            placeholder="Type the name of food"
            className="form-control "
            name="foodName"
            {...register("foodName", { required: "Food Name is required" })}
            // error part ------------------
            aria-invalid={errors.foodName ? "true" : "false"}
          />

          {/* error part finishes ---------------*/}
        </div>
        <div>
          {errors.foodName?.type === "required" && (
            <span className="  ms-2 text-danger text-center ms-2" role="alert">
              {errors.foodName.message}
            </span>
          )}
        </div>

        {/* 3.price field */}

        <div className="input-group flex-nowrap mb-2 mt-3">
          <span className="input-group-text" id="addon-wrapping">
            Price
          </span>
          <input
            type="number"
            placeholder="Type the price of the food "
            className="form-control "
            name="price"
            {...register("price", { required: "Price is required" })}
            // error part ------------------
            aria-invalid={errors.price ? "true" : "false"}
          />

          {/* error part finishes ---------------*/}
        </div>
        <div>
          {errors.price?.type === "required" && (
            <span className="  ms-2 text-danger" role="alert">
              {errors.price.message}
            </span>
          )}
        </div>
        {/* 4.ImageUrl field */}
        <div className="input-group flex-nowrap mb-2 mt-3">
          <span className="input-group-text" id="addon-wrapping">
            Food Image{" "}
          </span>
          <input
            type="url"
            placeholder="Give the url of the food image"
            className="form-control "
            name="url"
            {...register("url", { required: "Image Url is required" })}
            // error part ------------------
            aria-invalid={errors.firstName ? "true" : "false"}
          />

          {/* error part finishes ---------------*/}
        </div>
        <div>
          {errors.url?.type === "required" && (
            <span className="  ms-2 text-danger" role="alert">
              {errors.url.message}
            </span>
          )}
        </div>
        {/* 5.PopularAndRecommendedselect field */}
        <div className="input-group flex-nowrap mb-2 mt-3">
          <span className="input-group-text w-50" id="addon-wrapping">
            {/* Food Name */}
            Is This Food Popular
          </span>
          <select
            className="form-select "
            name="popular"
            {...register("popular", { required: "Select one option" })}
            aria-invalid={errors.firstName ? "true" : "false"}
          >
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
          <div>
            {errors.popular?.type === "required" && (
              <span className="  ms-2 text-danger" role="alert">
                {errors.popular.message}
              </span>
            )}
          </div>
        </div>
        {/* 6. recommendation select field */}

        <div className="input-group flex-nowrap mb-2 mt-3">
          <span className="input-group-text w-50" id="addon-wrapping">
            {/* Food Name */}
            Is This Food Recommended
          </span>
          <select
            className="form-select "
            name="recommended"
            {...register("recommended", { required: "Select one option" })}
            aria-invalid={errors.recommended ? "true" : "false"}
          >
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
          <div>
            {errors.recommended?.type === "required" && (
              <span className="  ms-2 text-danger" role="alert">
                {errors.recommended.message}
              </span>
            )}
          </div>
        </div>

        {/* submission field */}
        <div className="">
          <input
            type="submit"
            //value="submit"
            className="btn btn-primary w-100"
            //name="submit"
            // {...register("IsRecommended", {})}
          />
        </div>
      </div>
    </form>
  );
};

export default ReactHookForm;
