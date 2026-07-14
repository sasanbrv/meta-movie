import TogglePlans from "./TogglePlans";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { PRICING_PLANS } from "./Data/pricingPlan";
function Plans() {
  const [billing, setBilling] = useState("monthly");
  const plan = PRICING_PLANS[billing];

  return (
    <>
      <section>
        <div className="flex justify-center flex-col items-center text-white text-center">
          <h1 className="text-5xl font-bold mt-16">Choose your plan</h1>
          <p className="my-8 text-xl">
            Choose your plan to enjoy unlimited access to your Favourite Movies
            and Shows
          </p>

          <TogglePlans billing={billing} setBilling={setBilling} />
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {plan.map((plan) => (
            <div
              key={plan.id}
              className="border-2 border-primary rounded-tr-3xl rounded-bl-3xl p-6 text-white"
            >
              <h3 className="text-primary text-2xl font-bold text-center">
                {plan.name}
              </h3>

              <p className="text-center mt-4">
                <span className="text-4xl font-bold">
                  {plan.currency}
                  {plan.price}
                </span>
                /{plan.duration}
              </p>

              <p className="text-gray-400 text-center mt-2">
                {plan.description}
              </p>

              <div className="h-px w-full bg-linear-to-r from-transparent via-primary to-transparent my-4" />

              <ul className="space-y-3 ">
                {plan.features.map((feature) => (
                  <li className="flex items-center gap-2" key={feature}>
                    <FaCheckCircle className="text-primary" /> {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full mt-8 bg-primary text-black py-3 rounded-tr-3xl rounded-bl-3xl font-semibold">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Plans;
