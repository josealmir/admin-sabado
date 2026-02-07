import { Route, Routes } from "react-router-dom";
import { IndexPage } from "./pages";
import { NotFoundPage } from "./pages/notfound";
import { NoAuthorizedPage } from "./pages/noauthorized";
import { DashboardPage } from "./pages/dashboard";
import { LoginPage } from "./pages/public/login";
import { ForgotPasswordPage } from "./pages/public/forgot-password";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/index" element={<IndexPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/no-authorization" element={<NoAuthorizedPage />} />
        </Routes>
    )
}
