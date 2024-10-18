import React from "react";
import NavbarUser from "../../component/user/NavbarUser";

const LayoutUser = ({ children }) => {
  return (
    <React.Fragment>
      <NavbarUser />
      <div className="p-0 flex" style={{ minHeight: "100vh" }}>
        <div className="flex-1 bg-gradient-to-b from-[#000000] to-[#2e2e2e] ">
          <main
            className="min-h-screen pt-20"
            style={{ minHeight: "100vh", Width: "100%" }}
          >
            {children}
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LayoutUser;
