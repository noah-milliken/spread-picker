import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Pickit</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="profile">Profile</NavLink>
        </nav>

        <main>
          <Outlet />
        </main>
      </header>
    </div>
  );
}
