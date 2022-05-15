import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import I18nProvider from "next-translate/I18nProvider";
import eng from "../locales/en/home-page.json";

const namespaces = {
  common: {
    search: { placeholder: "search items" },
  },
  ["home-page"]: { ...eng },
};

const AllProviders = ({ children }) => {
  return (
    <I18nProvider lang="en" namespaces={namespaces}>
      {children}
    </I18nProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
