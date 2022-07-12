import {useRouter} from "next/router";

export default function Cv() {
	const router = useRouter();
	if (router.query.lang == "id") {
		return <iframe src="/cv-id.pdf"></iframe>;
	} else {
		return <iframe src="/cv-eng.pdf"></iframe>;
	}
}
