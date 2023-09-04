import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { URLSearchParams } from "url";

export function useQuery() {
	const { search } = useLocation();

	return useMemo(() => new URLSearchParams(search), [search]);
}
