import styles from './SiteExplainer.module.scss'

export function SiteExplainer() {
  return (
    <p className={styles.wrapper}>
      This site is basically my little web home where I write my thoughts and post some links to
      other things I&lsquo;ve said. It was also my little experiment in web design since I didn&lsquo;t
      use a design framework for this site. All the CSS (technical term for the code that makes
      a website look a certain way) was done by hand and I&lsquo;m generally not someone
      who&lsquo;s super well-versed in web design.
    </p>
  )
}
