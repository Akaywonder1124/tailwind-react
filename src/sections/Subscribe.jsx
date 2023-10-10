import { Button } from "../components";

const Subscribe = () => {
  return (
    <section className="max-container flex flex-col justify-center items-center ">
      <div>
        <h3 className="mt-1 font-palanguin text-4xl text-center font-bold">
          Sign Up for <span className="text-coral-red">Updates</span> &
          Newsletter
        </h3>
        <div className="flex mt-10 justify-between border-2 px-4 py-2 rounded-full">
          <input
            type="text"
            placeholder="subscribe@gmail.com"
            className="input"
          />
          <Button label="Sign Up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
