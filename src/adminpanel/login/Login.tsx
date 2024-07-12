import Card from "../../component/Card";
import LoginForm from "./LoginForm";

function Login() {
    return (
        <div className="relative bg-login bg-cover bg-center h-screen w-full">
          <Card
            variant="dark"
            effect="glass"
            className="relative p-3 bg-opacity-20 backdrop-blur-[7px] bg-slate-700 rounded-xl shadow-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[21rem] z-10 xsm:w-full"
          >
            <h1 className="mt-5 text-slate-300 text-xl font-bold text-center [text-shadow:0px_0px_3px_#ffffff]">
              Login
            </h1>
            <LoginForm />
          </Card>
        </div>
      );
}

export default Login;