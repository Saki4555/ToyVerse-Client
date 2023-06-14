import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useMyToys = () => {
    const { user } = useAuth();
    const { data: userToys = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['mytoys', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/mytoys/${user?.email}`);
            return res.json();
        }
    });
 
    return [userToys, loading, refetch];
};

export default useMyToys;