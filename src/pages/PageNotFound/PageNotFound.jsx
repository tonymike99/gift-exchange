const errorImage = require("../../static/img/404_error.svg");

function PageNotFound() {
  return (
    <main className="p-6 md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto">
      <img src={errorImage.default} alt="" />
    </main>
  );
}

export default PageNotFound;
