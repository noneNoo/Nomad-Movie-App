function FavoriteIdol({ favname }) {
  return <h2>I love {favname} </h2>;
}

function App() {
  return (
    <div>
      <h1>Helloooo!</h1>
      <FavoriteIdol
        favname="Futaba Anzu"
        lovely={true}
        point={[
          'cute eye',
          'cute voice',
          'kawaiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
        ]}
      />
      <FavoriteIdol favname="Abe Nana" />
      <FavoriteIdol favname="Shimamura Uzuki" />
      <FavoriteIdol favname="Shibuya Rin" />
      <FavoriteIdol favname="Yumemi Riamu" />
    </div>
  );
}

export default App;
