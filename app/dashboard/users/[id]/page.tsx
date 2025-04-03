import React from "react";

export default function UserDetailsPage({ params }: { params: { id: string, name: string } }) {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1>User Details</h1>
        <p>User ID: {params.id}</p>
        <p>User Name: {params.name}</p>
      </div>
    </div>
  );
}
