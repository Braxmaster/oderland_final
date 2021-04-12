import { useSelector } from "react-redux";
import { selectCount } from "./counterSlice";

export function ClickDisplayPage() {
	const count = useSelector(selectCount);
	return <h1>You clicked: {count} times</h1>;
}
