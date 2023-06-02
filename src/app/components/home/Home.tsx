import { router } from "../../router/Routes";

const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-8">
      <h2 className="text-5xl font-bold text-blue-400 ">Faketter</h2>
      <h3 className="text-white font-bold text-3xl text-center mx-12">
        You must be logged in to continue
      </h3>
      <div className="flex flex-col items-center justify-center gap-5 font-bold text-lg">
        <button
          onClick={() => router.navigate("/login")}
          className="bg-white px-10 py-3 w-40 rounded-md shadow-md shadow-white transition-all duration-200   
          active:bg-blue-400 
          active:text-white 
          active:shadow-blue-400
          hover:bg-black 
          hover:text-white 
          hover:shadow-black cursor-pointer"
        >
          Login
        </button>
        <button
          onClick={() => router.navigate("/register")}
          className="bg-blue-400 px-10 py-3 rounded-md shadow-md w-40 shadow-blue-400 text-white transition-all duration-200   
          active:bg-white 
          active:text-black 
          active:shadow-white font-bold mx-auto 
          hover:bg-black 
          hover:text-white 
          hover:shadow-black cursor-pointer"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;
