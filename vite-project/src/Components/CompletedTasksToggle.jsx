import styles from "./CompletedTasksToggle.module.css";

function CompletedTasksToggle({ showCompleted, onToggle }) {
  return (
    <button
      className={styles.toggle}
      onClick={onToggle}
      type="button"
    >
      {showCompleted ? "Hide completed" : "Show completed"}
    </button>
  );
}

export default CompletedTasksToggle;