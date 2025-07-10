import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="m-w-screen flex flex-col justify-center items-center">
      <nav className="w-1/2 p-4 border-l border-r border-b border-gray-500 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black text-lg font-bold">
            <Link to="/">시고르토크</Link>
          </div>
          <Link
            to="/login"
            className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          >
            로그인
          </Link>
        </div>
      </nav>
    </div>
  );
}
