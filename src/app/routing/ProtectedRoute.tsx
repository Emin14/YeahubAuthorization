import { Navigate, Outlet } from "react-router";
import { useGetProfileQuery } from "../../entities/user/api";
import { Spinner } from "../../shared/ui";

export function ProtectedRoute() {
  const { data, isLoading } = useGetProfileQuery();
  if (isLoading) {
    return <Spinner />;
  }

  return data ? <Outlet /> : <Navigate to="/login" />;
}
