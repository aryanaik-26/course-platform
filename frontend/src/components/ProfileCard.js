function ProfileCard({ profile }) {
  return (
    <div className="profile-card">

      <h2>
        {profile.displayName || "New User"}
      </h2>

      <p>{profile.email}</p>

      <p>
        {profile.bio || "No bio added yet."}
      </p>

    </div>
  );
}

export default ProfileCard;