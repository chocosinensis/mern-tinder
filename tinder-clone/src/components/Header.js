import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

const Header = () => (
  <header>
    <IconButton>
      <PersonIcon
        fontSize="large"
        className="icon"
      />
    </IconButton>
    <img
      className="logo"
      src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
      alt="Loading tinder logo..."
    />
    <IconButton>
      <ForumIcon
        fontSize="large"
        className="icon"
      />
    </IconButton>
  </header>
);

export default Header;
