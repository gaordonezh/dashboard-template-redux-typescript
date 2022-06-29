import { LazyExoticComponent, Suspense } from 'react';
import Loader from './Loader';

const Loadable = (Component: LazyExoticComponent<() => JSX.Element>) => (props: object) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
