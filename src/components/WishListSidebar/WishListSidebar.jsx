import WishListItem from "../WishListItem/WishListItem";

function WishListSidebar() {
  return (
    <aside>
      <h2>My Wish List</h2>
      <ul>
        <WishListItem />
        <WishListItem />
        <WishListItem />
      </ul>
    </aside>
  );
}

export default WishListSidebar;