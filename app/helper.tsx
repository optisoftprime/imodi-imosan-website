import { useRouter } from "next/navigation";

export function useNavTo() {
    const router = useRouter();
    return (path: string, params?: Record<string, string>) => {
        if (!params) return router.replace(path);
        const query = new URLSearchParams(params).toString();
        router.replace(`${path}?${query}`);
    };
}