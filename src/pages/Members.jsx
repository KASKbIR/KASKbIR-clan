import { useState } from "react";
import kaskbirAvatar from "../assets/members/kaskbir-avatar.jpg";
import membersData from "../data/members";

function Members({ lang, t }) {

  const text = t[lang];
  const [mapMember, setMapMember] = useState(null);

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

<div
  className="mapIconButton"
  onClick={() => setMapMember(member)}
>
  🗺
</div>

          </div>

        ))}

      </div>

{mapMember && (
  <div
    className="mapModal"
    onClick={() => setMapMember(null)}
  >
    <div
      className="mapModalContent"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="mapModalClose"
        onClick={() => setMapMember(null)}
      >
        ✕
      </button>

      <div className="mapModalTitle">
        {mapMember.nickname}
      </div>

      {mapMember.cityImage && (
        <img
          src={mapMember.cityImage}
          alt={mapMember.city}
          className="cityPhoto"
        />
      )}

      <div className="mapMemberInfo">
      <strong>{mapMember.cityKey ? text[mapMember.cityKey] : text[mapMember.country]}</strong>
        <span>{text[mapMember.country]}</span>
      </div>

    </div>
  </div>
)}

    </section>
  );
}

export default Members;