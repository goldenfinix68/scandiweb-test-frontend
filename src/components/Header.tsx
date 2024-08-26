import "../sass/components/_Header.scss";

interface Props {
  isHome?: boolean;
}

function Header({ isHome = false }: Props) {
  return isHome ? (
    <div className="header">
      <div>Product List</div>
      <div>
        <button>ADD</button>
        <button>MASS DELETE</button>
      </div>
    </div>
  ) : (
    <div className="header">
      <div>Add Product</div>
      <div>
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  );
}

export default Header;
