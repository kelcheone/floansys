import Link from "next/link";

const _404 = () => {
  return (
    <div className="bg-red-400 h-screen text-black flex items-center justify-center">
      <div className="text-3xl font-bold">Page Not found</div>
      <button className="bg-black text-white font-bold inline-block">
        <Link href="/">Go to Home</Link>
      </button>
    </div>
  );
};

export default _404;
