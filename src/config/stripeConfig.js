import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51Q5yy3HfzoUG9EulQCju13tJbJBrxI9ZraoPLk441KSRZ6x7ewRZq8cqHA9ep3mYYW99zGwuhs5bJ4HIpgbrCLz100urzScluw',
);

export default stripePromise;
