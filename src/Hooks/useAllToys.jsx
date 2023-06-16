import { useQuery } from "@tanstack/react-query";



const useAllToys = () => {
    const { data: toys = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['alltoys'],
        queryFn: async () => {
            const res = await fetch('https://assignment-11-server-iota-five.vercel.app/alltoys');
            return res.json();
        },
      
    });

return [toys, loading, refetch];
};

export default useAllToys;
