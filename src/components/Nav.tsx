import styles from '@/styles/Nav.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target[0].form[0].value) router.push(`/items/${e.target[0].form[0].value}`);
  };

  return (
    <nav className={styles.container}>
      <Link href="/">
        <div className={styles.logo} />
      </Link>
      <form className={styles.inputContainer} onSubmit={handleSubmit}>
        <input type="text" placeholder="Nunca dejes de buscar" />
        <button type="submit" className={styles.search}> </button>
      </form>
    </nav>
  );
};

export default Nav;
