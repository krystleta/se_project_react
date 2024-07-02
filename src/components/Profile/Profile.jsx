import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  onCardClick,
  handleAddClick,
  clothingItems,
  handleEditProfileModal,
  onCardLike,
  isLoggedIn,
  handleLogOut,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          handleEditProfileModal={handleEditProfileModal}
          handleLogOut={handleLogOut}
        />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          handleAddClick={handleAddClick}
          onCardLike={onCardLike}
          isLoggedIn={isLoggedIn}
          handleLogOut={handleLogOut}
        />
      </section>
    </div>
  );
}

export default Profile;
