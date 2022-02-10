import { useGlobalContext } from "./context";

const Submenu =()=> {
    const{isSubmenuOpen, location: {center, bottom}, page: {page, links}} = useGlobalContext()
    return (
      <aside className={`${isSubmenuOpen? "submenu show":"submenu"}`} style={{top: bottom, left:center}}>
        <section>
          <h4>{page}</h4>
          <div className="submenu-center">
            <p>Submenu</p>
            <p>Submenu</p>
            <p>Submenu</p>
          </div>
        </section>
      </aside>
    );
}
export default Submenu