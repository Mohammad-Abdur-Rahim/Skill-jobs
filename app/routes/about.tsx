import { useEffect, useState } from "react";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "about | My App" },
    { name: "description", content: "This is the about page" },
  ];
}

export default function About() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="bg-orange-400 p-5 min-h-screen">
      <h2 className="text-6xl font-bold pt-5 mb-4 m-5 text-white text-center">
        About Page
      </h2>

      <div className="p-6 border rounded-xl grid grid-cols-1 md:grid-cols-3 gap-5">
        {comments.map((comment) => (
          <div
            key={comment?.id}
            className="border bg-white border-white p-3 rounded h-[250px] flex flex-col justify-between"
          >
            <div>
    
              <h3 className="text-black font-bold mb-2 text-center"><span className="text-amber-600 font-bold text-xl">{comment?.id}</span> {comment?.name}</h3>
              <p className="text-gray-700 text-justify">{comment?.body}</p>
            </div>

         <div>   <p className="text-sm text-blue-600 border-t text-center pt-2">
              Email: {comment?.email}
            </p></div>
          </div>
        ))}
      </div>
    </div>
  );
}
