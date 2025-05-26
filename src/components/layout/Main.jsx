export default function Main() {
  const itemsList = [
    "titoloArticolo1",
    "titoloArticolo2",
    "titoloArticolo3",
    "titoloArticolo4",
  ];
  return (
    <main>
      <div className="container">
        <ul>
          {itemsList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
