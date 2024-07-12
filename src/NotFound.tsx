import CLink from "./component/CLink";

function NotFound() {
  return (
    <section className="w-full h-screen px-52 text-white flex flex-col justify-center gap-16 bg-gradient-to-bl from-d-purple to-black md:px-12 xlsm:px-5">
      <div className="flex flex-col gap-5">
        <h1 className="text-c-teal text-[2rem]">Rossz helyen jársz</h1>
        <p>Ez nem az, amit keressel valószinűleg....</p>
      </div>
      <div className="h-auto w-auto flex">
        <CLink variant="default" hover="animated" url="/" >Nézz körül az oldalon</CLink>
      </div>
    </section>
  );
}

export default NotFound;