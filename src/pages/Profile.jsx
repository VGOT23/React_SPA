export default function Profile() {
  return (
    <section className="card">
      <div className="profileTop">
        <div className="avatarLg">OG</div>

        <div className="profileInfo">
          <h1 className="title" style={{ marginBottom: "6px" }}>
            OG
          </h1>
          <p className="text" style={{ marginBottom: "10px" }}>
            CSE (AI/ML) • 3rd Year
          </p>

          <div className="tagRow">
            <span className="tag">React</span>
            <span className="tag">DSA</span>
            <span className="tag">Projects</span>
          </div>
        </div>

        <button className="primaryBtn">Edit Profile</button>
      </div>

      <div className="divider" />

      <div className="twoCol">
        <div className="panel">
          <h3 className="panelTitle">Basic Info</h3>

          <div className="infoRow">
            <span className="infoKey">Email</span>
            <span className="infoValue">og.dev@gmail.com</span>
          </div>

          <div className="infoRow">
            <span className="infoKey">Location</span>
            <span className="infoValue">India</span>
          </div>

          <div className="infoRow">
            <span className="infoKey">Goal</span>
            <span className="infoValue">Placement Ready</span>
          </div>
        </div>

        <div className="panel">
          <h3 className="panelTitle">Today’s Plan</h3>

          <div className="checkList">
            <label className="checkItem">
              <input type="checkbox" defaultChecked />
              <span>Revise arrays (30 min)</span>
            </label>

            <label className="checkItem">
              <input type="checkbox" />
              <span>Solve 2 problems (sliding window)</span>
            </label>

            <label className="checkItem">
              <input type="checkbox" />
              <span>React mini project (UI)</span>
            </label>
          </div>

          <button className="secondaryBtn">Mark as Done</button>
        </div>
      </div>

      <div className="divider" />

      <div className="sectionTitleRow">
        <h3 className="sectionTitle">Recent Activity</h3>
        <span className="muted">This week</span>
      </div>

      <div className="activityGrid">
        <div className="activityCard">
          <p className="activityTitle">Problems Solved</p>
          <h2 className="activityValue">14</h2>
          <p className="activityHint">+4 from last week</p>
        </div>

        <div className="activityCard">
          <p className="activityTitle">Projects</p>
          <h2 className="activityValue">3</h2>
          <p className="activityHint">1 in progress</p>
        </div>

        <div className="activityCard">
          <p className="activityTitle">Study Hours</p>
          <h2 className="activityValue">9.5</h2>
          <p className="activityHint">Keep consistency</p>
        </div>
      </div>
    </section>
  );
}
