import { useGlobalContext } from "./context";

const Submenu =()=> {
    const{isSubmenuOpen, location: {center, bottom}, page: {page, links}} = useGlobalContext()
    return (
      <aside className={`${isSubmenuOpen? "submenu show":"submenu"}`} style={{top: bottom, left:center}}>
        <article>
          <h4 className="meny-desktop">{page}</h4>
          <div className="sidebar-sublinks">
          {links.map((link, index) => {
   const { url, icon, label } = link;
   return (
     <a href={url}>
       <span className="sublinks-icon">{icon} </span>
       {label}
     </a>
   );
 })}
          </div>
        </article>
      </aside>
    );
}
export default Submenu
