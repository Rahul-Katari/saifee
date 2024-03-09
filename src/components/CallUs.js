import { IconPhoneFilled } from "@tabler/icons-react";

const CallUs = () => {
  return (
    <div className="flex md:my-20 my-12 justify-center">
      <div className="p-5 text-white bg-highlight rounded shadow-3xl flex items-center inline md:gap-12 gap-6">
        <IconPhoneFilled
          size={window.innerWidth <= 768 ? 40 : 90}
          className="rounded-full md:p-3 p-2 border border-2"
        />
        <div>
          <p className="md:text-3xl">Call us now</p>
          <h2 className="md:text-5xl text-2xl font-bold">
            <a href="tel:+917340040097">+91 73400 40097</a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CallUs;