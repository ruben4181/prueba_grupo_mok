import DefaultButton from "../Buttons/DefaultButton";

export default function ActionsCell({ actions, id }) {
  return (
    <td className="flex justify-center pt-3 pb-3">
      {actions.map((action, index) => (
        <DefaultButton
          key={"btn-" + id + "-" + action.label}
          options={{ text: action.label }}
          className={actions.length > 1 ? "me-3" : ""}
          onClick={(e) => {
            action.handle(id);
          }}
        />
      ))}
    </td>
  );
}
