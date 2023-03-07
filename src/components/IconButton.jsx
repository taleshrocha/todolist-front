export default function IconButton({ Icon, className, ...props }) {
  return (
    <button 
      className={`p-1 hover:bg-neutral-600 rounded-md ${className}`}
      {...props}
    >
      <Icon />
    </button>
  );
}
