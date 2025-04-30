// Add inline styles on each individual button, corresponding to the action
export default function ButtonVariants() {
  const sharedStyles = { color: "white", fontWeight: "bold" };

  return (
    <span className="wrapper">
      <button
        className="button-create"
        style={{
          ...sharedStyles,
          backgroundColor: "green",
        }}
      >
        Create
      </button>
      <button
        className="button-update"
        style={{
          ...sharedStyles,
          backgroundColor: "darkorange",
        }}
      >
        Update
      </button>
      <button
        className="button-delete"
        style={{
          ...sharedStyles,
          backgroundColor: "red",
        }}
      >
        Delete
      </button>
    </span>
  );
}
