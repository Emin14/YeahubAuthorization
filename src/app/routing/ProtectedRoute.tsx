import { Navigate, Outlet } from "react-router";
import { useGetProfileQuery } from "../../pages/user/api/getProfile";
import Spinner from "../../shared/ui/Spinner/Spinner";

export function ProtectedRoute() {
  const { data, isLoading } = useGetProfileQuery();
  if (isLoading) {
    return <Spinner />;
  }

  return data ? <Outlet /> : <Navigate to="/login" />;
}
