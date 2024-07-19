import { FunctionComponent, ReactNode } from "react";

type Handler<T> = FunctionComponent<T>;

export type PageHandler = Handler<{
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}>;

export type ErrorHandler = Handler<{
  error: Error & { digest?: string }
  reset: () => void
}>;

export type LayoutHandler = Handler<Readonly<{ children: ReactNode }>>;
export type TemplateHandler = Handler<{ children: ReactNode }>;

export type LoadingHandler = Handler<{}>;
export type NotFoundHandler = Handler<{}>;