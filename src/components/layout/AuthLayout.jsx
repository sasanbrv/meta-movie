import { Outlet } from "react-router-dom";

const AuthLayout=() => {
  return (
      
      <main className="msin-h-screen">
        <Outlet />  
      </main>
  );
}

export default AuthLayout;