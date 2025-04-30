// Add inline styles on each individual button, corresponding to the action
export default function ButtonVariants() {
  return (
    <span className="wrapper">
      <button className="button-create">Create</button>
      <button className="button-update">Update</button>
      <button className="button-delete">Delete</button>
    </span>
  );
}
