import { Container, Spinner } from 'react-bootstrap';

export default function SuspenseFallback() {
  return (
    <Container>
      <h1>Loading...</h1>
      <Spinner />
    </Container>
  );
}
