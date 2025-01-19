import headerImg from "/images/top_picture.png";

export default function Header() {
  return (
    <div>
      <div
        className="flex items-center w-screen bg-cover min-h-64"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="flex justify-between m-4">
          <h1 className="m-4 text-4xl text-slate-200">Branko Rajković</h1>
          <img
            src="/images/portfolio_foto.png"
            alt="portfolio-foto"
            className="w-20 m-4 border-2 rounded-full border-sky-300"
          />
          <div>
            <p className="m-4 text-lg text-slate-500">
              <span className="font-semibold">Location: </span>
              Novi Sad, Serbia
            </p>
            <p className="m-4 text-lg text-sky-200">
              <span className="font-semibold">email: </span>
              home.branko@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
