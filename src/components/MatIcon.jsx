export default function MatIcon({ name, size = 22, className = '', style = {} }) {
  return (
    <span
      className={`material-symbols-outlined${className ? ' ' + className : ''}`}
      style={{ fontSize: size, ...style }}
    >
      {name}
    </span>
  )
}
