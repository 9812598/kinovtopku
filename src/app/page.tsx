import MainCards from "@/components/(MainPage)/MainCards";
import MainHeader from "@/components/(MainPage)/MainHeader";
import MainSelects from "@/components/(MainPage)/(Selects)/MainSelects";

async function getAllFilms() {
  const res = await fetch(`http://localhost:3004/films`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const films = await getAllFilms();

  return (
    <>
      <MainHeader />
      <MainSelects />
      <MainCards films={films} />
    </>
  );
}
