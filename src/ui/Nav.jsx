import logo from '../assets/logo.jpg';

function Nav() {
  return (
    <header className="flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-2 ">
        <img src={logo} alt="Logo" className="w-20 h-10 rounded-lg" />
        <span className="font-semibold text-lg">Pilly</span>
      </div>
    </header>
  );
}

export default Nav;