import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card from '../components/Card';
import Spinner from '../components/Spinner';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchVideos = async () => {
      try {
        const { data } = await axios.get(`/videos/${type}`);
        setVideos(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchVideos();
  }, [type]);

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {videos?.map((video) => (
            <Card key={video._id} video={video} />
          ))}
        </>
      )}
    </Container>
  );
};

export default Home;
