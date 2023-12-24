"use client";

import { useState } from "react";

export default function Home() {
	const [items, setItems] = useState([]);
	const [newItem, setNewItem] = useState("");
	const [isDone, setDone] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setItems([...items, newItem]);
		setNewItem("");
	};

	const handleClassToggle = (item) => {
		setDone(true);
		if (!isDone === true) {
			return (item.target.className = "done bg-blue-500 p-3 w-full");
		} else if (!isDone === false) {
			setDone(false);
			return (item.target.className = "bg-blue-500 p-3 w-full");
		}
	};

	return (
		<div className="flex items-center justify-center flex-col">
			<h1 className="text-blue-500 text-4xl p-5">Kroger Shopping List</h1>
			<input
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
				className="text-2xl text-blue-500 p-1"
				type="text"
				placeholder="Enter Item"
			/>
			<button
				className="bg-blue-500 p-3 rounded-lg hover:opacity-50 m-2"
				onClick={handleSubmit}
			>
				Add
			</button>
			<ul>
				{items.map((item, index) => (
					<li key={index} className="text-3xl p-5">
						<button
							onClick={handleClassToggle}
							className="bg-blue-500 p-3 w-full"
							// onClick={(i) => {
							// 	if (i) {
							// 		console.log(i.target.childNodes[0].textContent);
							// 	}
							// }}
						>
							{item}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
