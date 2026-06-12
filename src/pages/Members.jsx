import React from "react";

const membersData = [
  {
    nickname: "KS乂ChingisXan",
    pubgId: "5828989992",
    role: "leader",
    country: "kazakhstan",
    languages: "RU | KZ",
  },

  {
    nickname: "KS乂TeHbBeTpA",
    pubgId: "5753457243",
    role: "deputy",
    country: "kazakhstan",
    languages: "RU | KZ",
  },

  {
    nickname: "KS乂KARATEL",
    pubgId: "5991021949",
    role: "deputy",
    country: "kazakhstan",
    languages: "RU | KZ",
  },

  {
    nickname: "KS乂KaKoCiK",
    pubgId: "51418110998",
    role: "deputy",
    country: "russia",
    languages: "RU",
  },

  {
    nickname: "KS乂Alisher133",
    pubgId: "5645926746",
    role: "elite",
    country: "kazakhstan",
    languages: "RU | KZ",
  },

  {
    nickname: "KS乂LenaNova么",
    pubgId: "51881804182",
    role: "elite",
    country: "Россия",
    languages: "RU",
  },

  {
    nickname: "KS乂ALEkOtOMa",
    pubgId: "563094369",
    role: "member",
    country: "Россия",
    languages: "RU",
  },

  {
    nickname: "KS乂77MAN77",
    pubgId: "52466268454",
    role: "member",
    country: "russia",
    languages: "RU",
  },

  {
    nickname: "KS乂KARAENDI",
    pubgId: "52014095319",
    role: "elite",
    country: "kazakhstan",
    languages: "RU | KZ",
  },

  {
    nickname: "KS乂NURLAN",
    pubgId: "52266239504",
    role: "elite",
    country: "kazakhstan",
    languages: "RU | KZ",
  },

  {
    nickname: "KS乂оpoznany",
    pubgId: "51581057663",
    role: "member",
    country: "kazakhstan",
    languages: "RU | KZ",
  },

  {
    nickname: "KS乂GOXAN",
    pubgId: "52057267831",
    role: "member",
    country: "russia",
    languages: "RU",
  },

  {
    nickname: "KS乂AURA",
    pubgId: "51925684353",
    role: "member",
    country: "russia",
    languages: "RU",
  },

  {
    nickname: "KS乂RFBOBA",
    pubgId: "51890186786",
    role: "member",
    country: "russia",
    languages: "RU",
  },

  {
    nickname: "KS乂Krisderik",
    pubgId: "51697179436",
    role: "elite",
    country: "kazakhstan",
    languages: "RU | KZ",
  },

  {
    nickname: "KS乂丹lina",
    pubgId: "5571499940",
    role: "member",
    country: "russia",
    languages: "RU",
  },

  {
    nickname: "KS乂JamaN1989",
    pubgId: "5600911569",
    role: "member",
    country: "kazakhstan",
    languages: "RU | KZ",
  },

  {
    nickname: "KS乂TALANT",
    pubgId: "5627992934",
    role: "elite",
    country: "kazakhstan",
    languages: "RU | KZ",
  },

    {
    nickname: "KS乂KAРА",
    pubgId: "51418935814",
    role: "member",
    country: "kazakhstan",
    languages: "RU | KZ",
  },

  {
    nickname: "KS乂ДЖОНИ",
    pubgId: "52364944985",
    role: "member",
    country: "kazakhstan",
    languages: "RU | KZ",
  },
];

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
              🐺
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