const mysteryBox = require("../../static/img/mystery-box.svg");

function Home() {
  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-bold">Gift someone?</h1>
        <p>
          People are always confused on what to gift on special occasions like
          birthdays, weddings, anniversaries, etc. We help you solve this.
        </p>
      </div>
      <div>
        <img src={mysteryBox.default} alt="" />
      </div>
    </main>
  );
}

export default Home;
