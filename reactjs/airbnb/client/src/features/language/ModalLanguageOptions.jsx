import { Close } from "@mui/icons-material";

const ModalLanguageOptions = () => {
  return (
    <div className="fixed inset-0">
      <div className="absolute top-1/2 left-1/2 p-4 w-1/2 h-3/4 bg-white rounded-2xl border-2 shadow-xl -translate-x-1/2 -translate-y-1/2">
        <Close className="p-1 mb-4 bg-white rounded-full border border-black scale-125" />
        <hr />

        <div id="translation">
          <div>
            <div className="my-4">
              <h6> Translation </h6>
              <iconTranslation></iconTranslation>
            </div>
            <p> Automatically translate descriptions and reviews to English </p>
          </div>
        </div>

        <h3> Choose a language and region </h3>

        <div className="grid grid-cols[repeat(auto-fill,minmax(100px,1fr))]">
          <div className="flex p-2">
            <p> language </p>
            <p> nation </p>
          </div>
          <div className="flex p-2">
            <p> language </p>
            <p> nation </p>
          </div>
          <div className="flex p-2">
            <p> language </p>
            <p> nation </p>
          </div>
          <div className="flex p-2">
            <p> language </p>
            <p> nation </p>
          </div>
          <div className="flex p-2">
            <p> language </p>
            <p> nation </p>
          </div>
          <div className="flex p-2">
            <p> language </p>
            <p> nation </p>
          </div>
          <div className="flex p-2">
            <p> language </p>
            <p> nation </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLanguageOptions;
