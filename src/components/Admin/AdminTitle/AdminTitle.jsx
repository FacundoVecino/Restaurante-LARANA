import logoLarana from '../../../assets/images/logoLarana.png';
import './AdminTitle.css';

const AdminTitle = () => {
  return (
    <div className="container-fluid title d-flex justify-content-center align-items-center py-4">
      <img src={logoLarana} alt="Logo Larana" className="logo" />
      <h1>Welcome Admin</h1>
    </div>
  );
};

export default AdminTitle;