const errorImage = require("../../static/img/404_error.svg");

function PageNotFound() {
  return (
    <main>
      <img className="" src={errorImage.default} alt="" />
    </main>
  );
}

export default PageNotFound;
