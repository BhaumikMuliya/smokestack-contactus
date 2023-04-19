function App() {
  return (
    <main className="grid w-screen h-screen gap-10 text-center font-cursive place-content-center bg-neutral-300">
      <p className="text-lg font-bold">
        Click on any of button below and go to relative component
      </p>
      <div className="flex justify-center gap-5">
        <button className="px-4 py-2 border-2 border-black rounded-lg shadow-button hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
          Telephone
        </button>
        <button className="px-4 py-2 border-2 border-black rounded-lg shadow-button hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
          Wire (Coming soon)
        </button>
      </div>
    </main>
  );
}

export default App;
