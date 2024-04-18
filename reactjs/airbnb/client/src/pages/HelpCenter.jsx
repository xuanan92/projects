import { ArrowForwardIos } from "@mui/icons-material";

const HelpCenter = () => {
  return (
    <div className="px-8 mx-96 text-black">
      <div>
        <h1 className="my-4 text-center">Hi, how can we help?</h1>
        <div className="flex p-2 m-auto w-1/3 bg-gray-200 rounded-full">
          <label className="flex flex-auto">
            <input
              className="pl-4 bg-transparent outline-none"
              type="text"
              placeholder="Search how-tos and more"
            />
          </label>
          <div className="flex justify-center items-center w-10 bg-red-600 rounded-full aspect-square">
            <p>A</p>
          </div>
          <div>
            {/* TODO: (icon search material UI) */}
            {/* <Search></Search> */}
          </div>
        </div>
      </div>
      {/* TODO: (create section tab) */}
      <section>
        <div className="flex gap-4 py-2 border-b border-b-gray-300">
          <div>Guest</div>
          <div>Host</div>
          <div>Experience Host</div>
          <div>Travel admin</div>
        </div>
        <div className="flex items-center p-4 my-12 w-full rounded-2xl border border-gray-200">
          <div className="flex flex-col flex-auto">
            <h5>We&apos;re here for you</h5>
            <p>Log in to get help with your reservations, account, and more.</p>
          </div>
          <div className="text-center w-[400px]">
            <p className="p-2 text-white bg-red-600 rounded-md">
              Log in or sign up
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between">
          <h2 className="my-4">Guides for getting started</h2>
          <div className="flex gap-1 items-center">
            <p>Browse all topics</p>
            <ArrowForwardIos fontSize="small" />
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          <div className="w-full">
            <img
              className="object-cover w-full rounded-2xl aspect-square"
              src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQC7Yy_yVJI4ILv_l6s_lPqP6A0G5dpytDW8EoIj9jML-EEyHOdT16vxsOZ2TMxCg7ZowA7NCh4HdSq1L27MDc"
              alt="img"
            />
            <h4 className="my-2 text-base">Getting started on Airbnb</h4>
          </div>
          <div className="w-full">
            <img
              className="object-cover w-full rounded-2xl aspect-square"
              src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQC7Yy_yVJI4ILv_l6s_lPqP6A0G5dpytDW8EoIj9jML-EEyHOdT16vxsOZ2TMxCg7ZowA7NCh4HdSq1L27MDc"
              alt="img"
            />
            <h4 className="my-2 text-base">Access and manage your account</h4>
          </div>
          <div className="w-full">
            <img
              className="object-cover w-full rounded-2xl aspect-square"
              src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQC7Yy_yVJI4ILv_l6s_lPqP6A0G5dpytDW8EoIj9jML-EEyHOdT16vxsOZ2TMxCg7ZowA7NCh4HdSq1L27MDc"
              alt="img"
            />
            <h4 className="my-2 text-base">Help with a reservation</h4>
          </div>
          <div className="w-full">
            <img
              className="object-cover w-full rounded-2xl aspect-square"
              src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQC7Yy_yVJI4ILv_l6s_lPqP6A0G5dpytDW8EoIj9jML-EEyHOdT16vxsOZ2TMxCg7ZowA7NCh4HdSq1L27MDc"
              alt="img"
            />
            <h4 className="my-2 text-base">AirCover for guests</h4>
          </div>
        </div>

        <h2 className="my-4">Top articles</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          <div>
            <h4>Canceling your reservation for a stay</h4>
            <p>
              Your plans have changed and now you need to cancel your
              reservation. No problem. You can...
            </p>
          </div>
        </div>
        <h2 className="my-4">Explore more</h2>
      </section>
    </div>
  );
};

export default HelpCenter;
