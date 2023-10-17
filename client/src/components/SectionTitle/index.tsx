import styles from './styles.module.sass'

const SectionTitle = ({ name, title }: { name: string; title: string }) => {
	return (
		<div className={styles.container}>
			<div className={styles.sectionMark}>
				<div className={styles.square}></div>
				<span>{name}</span>
			</div>
			<h2>{title}</h2>
		</div>
	)
}

export default SectionTitle
