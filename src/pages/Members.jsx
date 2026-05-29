const membersData = [
  {
    nickname: "KASKbIR",
    role: "Leader",
    status: "ONLINE",
  },

  {
    nickname: "Shadow",
    role: "Co-Leader",
    status: "ONLINE",
  },

  {
    nickname: "Reaper",
    role: "Sniper",
    status: "OFFLINE",
  },

  {
    nickname: "Vortex",
    role: "Assault",
    status: "ONLINE",
  },

  {
    nickname: "Ghost",
    role: "Scout",
    status: "ONLINE",
  },

  {
    nickname: "Blaze",
    role: "Support",
    status: "OFFLINE",
  },
];

function Members() {

  return (
    <section className="membersPage">

      <div className="membersHeader">

        <h1>KASKbIR ROSTER</h1>

        <p>
          Elite PUBG Mobile warriors united under one pack.
        </p>

      </div>

      <div className="membersGrid">

        {membersData.map((member, index) => (

          <div className="memberCard" key={index}>

            <div className="avatarGlow"></div>

            <div className="memberAvatar">
              {member.nickname.charAt(0)}
            </div>

            <h2>{member.nickname}</h2>

            <div className="memberRole">
              {member.role}
            </div>

            <div
              className={
                member.status === "ONLINE"
                  ? "status online"
                  : "status offline"
              }
            >
              {member.status}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Members;