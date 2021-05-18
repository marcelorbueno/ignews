import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return(
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="/">
            <time>18 de maio de 2021</time>
            <strong>Pela primeira vez em 30 anos, grandes do Rio não trocam de técnico no Estadual</strong>
            <p>Demorou, mas chegou o dia em que o futebol carioca pode se vangloriar em relação ao paulista, em que seus dirigentes podem dizer — mesmo que não seja exatamente verdade — que foram mais profissionais do que os colegas do outro lado da ponte aérea.</p>
          </a>
          <a href="/">
            <time>18 de maio de 2021</time>
            <strong>Pela primeira vez em 30 anos, grandes do Rio não trocam de técnico no Estadual</strong>
            <p>Demorou, mas chegou o dia em que o futebol carioca pode se vangloriar em relação ao paulista, em que seus dirigentes podem dizer — mesmo que não seja exatamente verdade — que foram mais profissionais do que os colegas do outro lado da ponte aérea.</p>
          </a>
          <a href="/">
            <time>18 de maio de 2021</time>
            <strong>Pela primeira vez em 30 anos, grandes do Rio não trocam de técnico no Estadual</strong>
            <p>Demorou, mas chegou o dia em que o futebol carioca pode se vangloriar em relação ao paulista, em que seus dirigentes podem dizer — mesmo que não seja exatamente verdade — que foram mais profissionais do que os colegas do outro lado da ponte aérea.</p>
          </a>
        </div>
      </main>
    </>
  )
}