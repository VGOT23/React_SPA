export default function Home() {
  return (
    <section className="card">
      <div className="pageHeader">
        <div>
          <h1 className="title">Home</h1>
          <p className="text">
            Welcome back 👋 Quick access to your activity, tasks and progress.
          </p>
        </div>

        <div className="chip">Active</div>
      </div>

      <div className="statsGrid">
        <div className="statCard">
          <p className="statLabel">Tasks</p>
          <h2 className="statValue">12</h2>
          <p className="statHint">3 due today</p>
        </div>

        <div className="statCard">
          <p className="statLabel">Streak</p>
          <h2 className="statValue">5 days</h2>
          <p className="statHint">Keep going</p>
        </div>

        <div className="statCard">
          <p className="statLabel">Focus Time</p>
          <h2 className="statValue">2h 15m</h2>
          <p className="statHint">This week</p>
        </div>
      </div>

      <div className="sectionTitleRow">
        <h3 className="sectionTitle">Quick Actions</h3>
        <button className="smallBtn">View all</button>
      </div>

      <div className="actionGrid">
        <button className="actionCard">
          <span className="actionIcon">⚡</span>
          <span className="actionText">
            <b>Start Session</b>
            <span>25 min focus timer</span>
          </span>
        </button>

        <button className="actionCard">
          <span className="actionIcon">📝</span>
          <span className="actionText">
            <b>Add Task</b>
            <span>track your work</span>
          </span>
        </button>

        <button className="actionCard">
          <span className="actionIcon">📊</span>
          <span className="actionText">
            <b>Progress</b>
            <span>weekly summary</span>
          </span>
        </button>
      </div>

      <div className="sectionTitleRow">
        <h3 className="sectionTitle">Recent Updates</h3>
        <span className="muted">Last 24 hours</span>
      </div>

      <div className="listCard">
        <div className="listItem">
          <div className="dot dot-green" />
          <div>
            <p className="listTitle">Completed “React UI layout”</p>
            <p className="listSub">Nice. Next: make it responsive.</p>
          </div>
          <span className="time">2h ago</span>
        </div>

        <div className="listItem">
          <div className="dot dot-blue" />
          <div>
            <p className="listTitle">Started “DSA revision”</p>
            <p className="listSub">Binary Search + Sliding Window</p>
          </div>
          <span className="time">6h ago</span>
        </div>

        <div className="listItem">
          <div className="dot dot-gray" />
          <div>
            <p className="listTitle">Saved new notes</p>
            <p className="listSub">Software Engineering - SRS</p>
          </div>
          <span className="time">12h ago</span>
        </div>
      </div>
    </section>
  );
}
