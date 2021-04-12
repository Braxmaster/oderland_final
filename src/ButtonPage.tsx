import { useDispatch } from "react-redux";
import { increment } from "./counterSlice";

export function ButtonPage() {
	const dispatch = useDispatch();
	return <button onClick={() => dispatch(increment())}>Click me!</button>;
}
