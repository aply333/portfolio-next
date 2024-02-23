export default function Cards({primaryClass, title}){
    return(
        <button className={primaryClass}>
            <h3>{title}</h3>
          </button>
    )
}
