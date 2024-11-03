"use client";
import type React from "react";
import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface AuthLayoutProps {
	children: ReactNode;
}

const ReduxProvider: React.FC<AuthLayoutProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
