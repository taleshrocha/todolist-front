export default function IconButton({ Icon }) {
  return (
    <button className="p-1 hover:bg-neutral-600 rounded-md">
      <Icon />
    </button>
  );
}
