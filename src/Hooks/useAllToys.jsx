import { useQuery } from "@tanstack/react-query";



const useAllToys = () => {
    const { data: toys = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['alltoys'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/alltoys');
            return res.json();
        },
      
    });

return [toys, loading, refetch];
};

export default useAllToys;
