import "./Spinner.css";

function Spinner({ loading }) {
  return (
    <>
      {loading && (
        <div className="background-spinner">
          <div className="spinner">
            <img src="https://i.stack.imgur.com/27Rnd.gif" alt="" />
          </div>
        </div>
      )}
    </>
  );
}

export default Spinner;
