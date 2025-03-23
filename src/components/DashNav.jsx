import React from "react";
import { Link } from "react-router";

const DashNav = () => {
  return (
    <div>
      <nav>
        <div className="container mx-auto bg-green-500 flex flex-row">
          <ul className=" text-white ">
            <li>
              <Link to="/" className="hover:text-gray-300">
                For Rent
              </Link>
            </li>

            <li>
              <Link to="/" className="hover:text-gray-300">
                For Sale
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default DashNav;

// import React from "react";

// const DashNav = () => {
//   return <div>DashNav</div>;
// };

// export default DashNav;
