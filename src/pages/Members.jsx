import kaskbirAvatar from "../assets/members/kaskbir-avatar.jpg";
import membersData from "../data/members";

function Members({ lang, t }) {

  const text = t[lang];
  return (
    <section className="membersPage">

      <div className="membersHeader">
        <h1>{text.membersTitle}</h1>

<p>
  {text.membersSubtitle}
</p>

        
      </div>

      <div className="membersGrid">

        {membersData.map((member, index) => (

          <div className="memberCard" key={index}>

            <div className="avatarGlow"></div>

            <div className="memberAvatar">
  <img
    src={kaskbirAvatar}
    alt="KASKbIR"
    className="memberAvatarImage"
  />
</div>

            <h2>{member.nickname}</h2>

            <div className="memberId">
              ID: {member.pubgId}
            </div>

            <div className="memberRole">
  {text[member.role]}
</div>

            <div className="memberCountry">
  🌍 {text[member.country]}
</div>

            <div className="memberLanguages">
              🗣 {member.languages}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Members;