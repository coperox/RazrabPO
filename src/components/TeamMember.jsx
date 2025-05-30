function TeamMember({ member }) {
  return (
    <div className="team-member">
      <div className="member-info">
        <h3>{member.name}</h3>
        <p className="position">{member.position}</p>
        <p className="bio">{member.bio}</p>
      </div>
      <div className="member-photo">
        <img src={member.photo} alt={member.name} />
      </div>
    </div>
  )
}

export default TeamMember