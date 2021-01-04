function FavoriteIdol({ favname, imgsrc }) {
  return (
    <article>
      <h2>I love {favname}</h2>

      <img src={imgsrc}></img>
    </article>
  );
}

const idolList = [
  {
    id: 1,
    name: 'Futaba Anzu',
    image:
      'https://www.project-imas.com/w/images/thumb/b/b1/Anzu_SS.png/450px-Anzu_SS.png',
  },
  {
    id: 2,
    name: 'Abe Nana',
    image:
      'https://www.project-imas.com/w/images/thumb/8/83/Nana_SS.png/450px-Nana_SS.png',
  },
  {
    id: 3,
    name: 'Shimamura Uzuki',
    image:
      'https://www.project-imas.com/w/images/thumb/f/f7/Uzuki_SS.png/450px-Uzuki_SS.png',
  },
  {
    id: 4,
    name: 'Yumemi Riamu',
    image:
      'https://www.project-imas.com/w/images/thumb/d/d5/Riamu_SS.png/450px-Riamu_SS.png',
  },
  {
    id: 5,
    name: 'Ogata Chieri',
    image:
      'https://www.project-imas.com/w/images/thumb/4/46/Chieri_SS.png/450px-Chieri_SS.png',
  },
];

function App() {
  return (
    <div>
      {idolList.map((item) => (
        <FavoriteIdol favname={item.name} imgsrc={item.image} key={item.id} />
      ))}
    </div>
  );
}

export default App;
