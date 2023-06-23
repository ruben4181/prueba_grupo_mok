import DefaultButton from "../../atoms/Buttons/DefaultButton";

export default function ActionsCell({ actions, id }) {
  return (
    <td className="text-black dark:text-white text-center">
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
