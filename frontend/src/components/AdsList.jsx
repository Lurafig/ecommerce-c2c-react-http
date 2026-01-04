import { useAds } from "../hooks/useAds";

export function AdsList() {
  const { ads, loading, error } = useAds();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro</p>;

  return (
    <ul>
      {ads.map((a) => (
        <li key={a.id}>{a.name}</li>
      ))}
    </ul>
  );
}
