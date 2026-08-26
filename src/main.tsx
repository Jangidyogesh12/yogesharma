import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import "@fontsource/geist-sans/400.css";
import "@fontsource/geist-sans/500.css";
import "@fontsource/geist-sans/600.css";
import "@fontsource/geist-sans/700.css";
import "@fontsource/geist-mono/400.css";
import "@fontsource/geist-mono/500.css";
import "./index.css";
import { ThemeToggle } from "./components/molecules/ThemeToggle";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const styles = {
  main: "mx-auto flex min-h-screen w-full max-w-3xl flex-col px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-14",
};

createRoot(document.getElementById("root")!).render(
  <>
    <ThemeToggle />
    <main className={styles.main}>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </main>
  </>,
);
