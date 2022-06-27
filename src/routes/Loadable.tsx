import { Suspense } from 'react';
import Loader from './Loader';

const Loadable = (Component: any) => (props: object) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;