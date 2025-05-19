import React from "react";

type car = {
  id: number;
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
};

export default async function UserDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const postData = await res.json();
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1>User Details</h1>
        <p>Title: {postData.title}</p>
        <p>Body: {postData.body}</p>
      </div>
    </div>
  );
}
