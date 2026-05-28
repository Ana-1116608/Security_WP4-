import ListingCard from "../components/ListingCard"

export const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/listings')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []); // Empty array ensures this runs once

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="view" >
      {data.map((listing) => (
        <ListingCard
        listing={listing}>
        </ListingCard>
      ))}
    </div>
  );
};
