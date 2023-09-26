import { NavLink, Outlet } from "react-router-dom";

export const ProfileLayout = () => {
  return (
    <div className="profile-layout">
      <h2>your profile</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="profile-nav">
        <nav>
          <NavLink to='picks'>Picks</NavLink>
          <NavLink to='league'>League</NavLink>
          <NavLink to='settings'>Settings</NavLink>
        </nav>
      </div>
      <Outlet />
    </div>

  );
};
