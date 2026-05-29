function Recruitment() {

  return (
    <section className="recruitmentPage">

      <div className="recruitmentContainer">

        <div className="recruitmentInfo">

          <h1>JOIN KASKbIR</h1>

          <p>
            Become part of the elite PUBG Mobile wolf pack.
            Discipline. Loyalty. Domination.
          </p>

          <ul>

            <li>✔ Active PUBG Mobile players</li>
            <li>✔ Teamplay & communication</li>
            <li>✔ Respect inside the clan</li>
            <li>✔ Daily activity preferred</li>

          </ul>

        </div>

        <form className="recruitmentForm">

          <input
            type="text"
            placeholder="Your Nickname"
          />

          <input
            type="text"
            placeholder="PUBG ID"
          />

          <input
            type="number"
            placeholder="Age"
          />

          <select>

            <option>Main Role</option>
            <option>Assault</option>
            <option>Sniper</option>
            <option>Scout</option>
            <option>Support</option>

          </select>

          <textarea
            placeholder="Tell us about yourself..."
          ></textarea>

          <button type="submit">
            SEND APPLICATION
          </button>

        </form>

      </div>

    </section>
  );
}

export default Recruitment;