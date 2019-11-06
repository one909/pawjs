import { RouteComponentProps, RouteProps } from 'react-router';
import { ComponentType } from 'react';
import { RouteConfig } from 'react-router-config';

interface IComponent {
  loadedData?: any;
  match?: any;
  location?: any;
  route?: any;
}
export type ReactComponent = ComponentType<RouteComponentProps<any>>
  | ComponentType<any>
  | ComponentType<IComponent>;
export type RouteComponent = Promise<ReactComponent>;

export interface IRoute extends RouteProps {
  path?: string;
  getRouteSeo?: any;
  compiled: boolean;
  delay?: number;
  error?: RouteComponent;
  layout?: RouteComponent;
  loadData?: any;
  seo?: any;
  routes?: (Route) [];
  skeleton?: RouteComponent;
  component?: RouteComponent & { preload: any };
  timeout?: number;
  modules?: string [];
  webpack?: string [];
}

export type Route = IRoute & RouteConfig;
