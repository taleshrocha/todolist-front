export default function IconButton({ Icon, ...props }) {
  return (
    <button 
      className="p-1 hover:bg-neutral-600 rounded-md"
      {...props}
    >
      <Icon />
    </button>
  );
}
