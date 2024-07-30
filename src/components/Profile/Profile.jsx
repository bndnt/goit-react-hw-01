import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.top}>
        <img src={image} />
        <p className={css.name}>{name}</p>{' '}
        <p className={css.tag}>{'@' + tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.list}>
        <li>
          <span className={css.listTitle}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span className={css.listTitle}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span className={css.listTitle}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
