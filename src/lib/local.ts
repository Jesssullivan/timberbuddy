// The touch UI mirrors its working values into localStorage (README "Data
// transmission and storage"). Storage can be missing or throw (private mode,
// blocked site data); the UI keeps working without it.
export function saveLocal(key: string, value: string): void {
	try {
		window.localStorage.setItem(key, value);
	} catch {
		// ignore: the server copy in store.json stays authoritative
	}
}
