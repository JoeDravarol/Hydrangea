import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('reflect', 'routes/reflect.tsx'),
  route('accounts', 'routes/accounts.tsx'),
] satisfies RouteConfig;
