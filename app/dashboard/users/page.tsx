import Link from "next/link";
import React from "react";

const userData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@doe.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
    city: "Anytown",
    state: "CA",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@doe.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
    city: "Anytown",
    state: "CA",
  },
  {
    id: 3,
    name: "Jim Doe",
    email: "jim@doe.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
    city: "Anytown",
    state: "CA",
  },
  {
    id: 4,
    name: "Jill Doe",
    email: "jill@doe.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
];

const page = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        {userData.map((user) => (
          <div key={user.id}>
            <Link href={`/dashboard/users/${user.id}`}>{user.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
