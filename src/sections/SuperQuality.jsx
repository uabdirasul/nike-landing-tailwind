import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="#about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you <br />{" "}
          <span className="text-coral-red inline-block mt-3">Super</span>{" "}
          <span className="text-coral-red inline-block mt-3">Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring that you get the best quality products for your active
          lifestyle. We take pride in our commitment to providing you with the
          best products for your needs. From the latest arrivals to the most
          popular items, we have something for everyone. Explore our collection
          and find the perfect pairing for your workout.
        </p>
        <p className="mt-6 lg:max-w-lg">
          Our dedication to quality and customer satisfaction is our top
          priority.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="Shoe 8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
