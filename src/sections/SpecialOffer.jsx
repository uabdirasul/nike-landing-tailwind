import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you <br />{" "}
          <span className="text-coral-red inline-block mt-3">Special</span> {""}
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your active lifestyle. We
          take pride in our commitment to providing you with the best products
          for your needs. From the latest arrivals to the most popular items, we
          have something for everyone. Explore our collection and find the
          perfect pairing for your workout.
        </p>
        <p className="mt-6 lg:max-w-lg">
          Unbeatable quality and exceptional customer service are our top
          priorities. Special offers and discounts are available for a limited
          time only. Do not miss out on this opportunity to save big on your
          active lifestyle.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
