import Link from "next/link";

const UsersPage = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const postsData = await res.json();
  return (
    <div>
      <div className="flex flex-col gap-4">
        {postsData.posts.map((post: any) => (
          <div key={post.id}>
            <Link href={`/dashboard/users/${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
